"use client";

import { useEffect, useRef } from "react";

interface VoiceSphereProps {
  isActive: boolean;
  mouthOpenness?: number;
}

export default function VoiceSphere({ isActive, mouthOpenness = 0 }: VoiceSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const size = Math.min(window.innerWidth * 0.7, 350);
    canvas.width = size;
    canvas.height = size;

    let time = 0;
    const centerX = size / 2;
    const centerY = size / 2;
    const baseRadius = size * 0.35;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      // Draw fluid organic shapes with multiple layers
      const layers = 8;
      const waveIntensity = isActive ? mouthOpenness * 25 + 15 : 8;

      for (let layer = 0; layer < layers; layer++) {
        const layerProgress = layer / layers;
        const radius = baseRadius * (0.6 + layerProgress * 0.5);

        ctx.beginPath();

        const points = 80;
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;

          // Complex wave patterns for organic fluid motion
          const wave1 = Math.sin(time * 0.015 + layerProgress * 4 + angle * 2) * waveIntensity;
          const wave2 = Math.cos(time * 0.025 - layerProgress * 3 + angle * 3) * (waveIntensity * 0.6);
          const wave3 = Math.sin(time * 0.01 + angle * 4 - layerProgress * 2) * (waveIntensity * 0.4);
          const wave4 = Math.cos(time * 0.02 + angle * 1.5) * (waveIntensity * 0.3);

          const r = radius + wave1 + wave2 + wave3 + wave4;
          const x = centerX + Math.cos(angle) * r;
          const y = centerY + Math.sin(angle) * r;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();

        // Create vibrant gradient colors (purple to cyan to green)
        const opacity = 0.15 + (1 - layerProgress) * 0.35;
        const hue = 280 - layerProgress * 100; // Purple (280) to cyan (180)
        const saturation = 70 + layerProgress * 20;
        const lightness = 45 + layerProgress * 25;

        // Stroke with gradient effect
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Add intense glow for active layers
        if (isActive) {
          ctx.shadowBlur = 25;
          ctx.shadowColor = `hsla(${hue}, 100%, 65%, ${opacity * 0.8})`;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Fill with semi-transparent gradient
        if (layer % 2 === 0) {
          const fillGradient = ctx.createRadialGradient(
            centerX,
            centerY,
            0,
            centerX,
            centerY,
            radius
          );
          fillGradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness + 20}%, ${opacity * 0.1})`);
          fillGradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0)`);
          ctx.fillStyle = fillGradient;
          ctx.fill();
        }
      }

      // Draw central bright core
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        baseRadius * 0.4
      );

      if (isActive) {
        coreGradient.addColorStop(0, `rgba(180, 255, 180, ${0.4 + mouthOpenness * 0.3})`);
        coreGradient.addColorStop(0.3, `rgba(100, 255, 220, ${0.3 + mouthOpenness * 0.2})`);
        coreGradient.addColorStop(0.6, `rgba(138, 80, 255, ${0.2 + mouthOpenness * 0.1})`);
        coreGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      } else {
        coreGradient.addColorStop(0, "rgba(100, 150, 255, 0.2)");
        coreGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      }

      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, 0, size, size);

      time += isActive ? 2.5 : 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, mouthOpenness]);

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto"
        style={{
          filter: isActive
            ? "drop-shadow(0 0 60px rgba(138, 80, 255, 0.5)) drop-shadow(0 0 80px rgba(0, 255, 200, 0.3))"
            : "drop-shadow(0 0 30px rgba(100, 150, 255, 0.3))"
        }}
      />
    </div>
  );
}
