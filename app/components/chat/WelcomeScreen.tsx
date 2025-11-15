"use client";

import { Sparkles, Heart, Stethoscope, MessageSquare, Zap, Shield } from "lucide-react";
import Image from "next/image";

interface WelcomeScreenProps {
  onSelectTopic: (topic: string) => void;
}

export default function WelcomeScreen({ onSelectTopic }: WelcomeScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-full px-4 pt-12 pb-32 overflow-y-auto bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,169,163,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,169,163,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* MOSA Logo with Holographic Effect */}
      <div className="relative mb-6 group">
        {/* Outer glow rings */}
        <div className="absolute inset-0 -m-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 blur-2xl opacity-40 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 via-purple-500 to-primary-500 blur-xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Logo Container with Glassmorphism */}
        <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl p-4 group-hover:scale-105 transition-transform duration-500">
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>

          {/* Logo */}
          <div className="relative z-10">
            <Image
              src="/mosa_logo-removebg-preview.png"
              alt="MOSA Logo"
              width={96}
              height={96}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
      </div>

      {/* Friendly Greeting */}
      <div className="relative mb-6 max-w-md">
        <h1 className="relative text-3xl md:text-4xl font-bold text-center tracking-tight mb-3">
          <span className="relative inline-block bg-gradient-to-r from-primary-400 via-accent-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Halo! Saya MOSA 👋
          </span>
        </h1>

        {/* Warm Welcome Message */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 mb-4">
          <p className="text-sm text-white/90 leading-relaxed mb-3 text-center">
            Selamat datang, teman! 😊
            <br />
            Saya teman virtual Anda untuk semua hal tentang kesehatan dan JKN 💙
          </p>
          <p className="text-xs text-white/60 leading-relaxed text-center">
            Jangan sungkan bertanya atau bercerita apa saja. Saya di sini untuk mendengarkan dan membantu Anda dengan ramah 🤗
          </p>
        </div>
      </div>

      {/* Safe Talk Badge */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent-500/20 to-purple-500/20 backdrop-blur-sm border border-accent-500/30">
          <Shield className="h-3.5 w-3.5 text-accent-400" />
          <span className="text-xs font-medium text-accent-300">Safe Talk Enabled</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-600/20 backdrop-blur-sm border border-primary-500/30">
          <Zap className="h-3.5 w-3.5 text-primary-400" />
          <span className="text-xs font-medium text-primary-300">AI Powered</span>
        </div>
      </div>

      {/* Quick Actions - Modern Cards */}
      <div className="w-full space-y-3 relative z-10">
        <button
          onClick={() => onSelectTopic("Bagaimana cara mendaftar BPJS?")}
          className="relative w-full group overflow-hidden rounded-2xl transition-all active:scale-[0.98]"
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>

          {/* Card content */}
          <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-primary-500/30 rounded-2xl p-4 group-hover:border-primary-400/50 transition-all">
            <div className="flex items-center gap-3">
              {/* Icon with glow */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-primary-500/30 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500/30 to-primary-600/30 backdrop-blur-sm border border-primary-400/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Stethoscope className="h-6 w-6 text-primary-300" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <h3 className="font-bold text-white text-sm mb-0.5 group-hover:text-primary-300 transition-colors">
                  Ask about Healthcare
                </h3>
                <p className="text-xs text-gray-400">
                  BPJS information & services
                </p>
              </div>

              {/* Arrow */}
              <div className="text-primary-400 group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSelectTopic("Saya merasa cemas dan butuh seseorang untuk diajak bicara")}
          className="relative w-full group overflow-hidden rounded-2xl transition-all active:scale-[0.98]"
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500 via-pink-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>

          {/* Card content */}
          <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-accent-500/30 rounded-2xl p-4 group-hover:border-accent-400/50 transition-all">
            <div className="flex items-center gap-3">
              {/* Icon with glow */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-accent-500/30 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-accent-500/30 to-pink-600/30 backdrop-blur-sm border border-accent-400/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-accent-300" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <h3 className="font-bold text-white text-sm mb-0.5 group-hover:text-accent-300 transition-colors">
                  Safe Talk & Support
                </h3>
                <p className="text-xs text-gray-400">
                  Emotional support & guidance
                </p>
              </div>

              {/* Arrow */}
              <div className="text-accent-400 group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSelectTopic("Apa saja layanan yang tersedia?")}
          className="relative w-full group overflow-hidden rounded-2xl transition-all active:scale-[0.98]"
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>

          {/* Card content */}
          <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 group-hover:border-purple-400/50 transition-all">
            <div className="flex items-center gap-3">
              {/* Icon with glow */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-purple-500/30 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-sm border border-purple-400/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-6 w-6 text-purple-300" />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <h3 className="font-bold text-white text-sm mb-0.5 group-hover:text-purple-300 transition-colors">
                  Explore Features
                </h3>
                <p className="text-xs text-gray-400">
                  Discover all available services
                </p>
              </div>

              {/* Arrow */}
              <div className="text-purple-400 group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Bottom hint - Futuristic */}
      <div className="mt-8 space-y-3">
        {/* Input modes */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></div>
            <span className="text-[10px] font-medium text-gray-400">TEXT</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <span className="text-[10px] font-medium text-gray-400">VOICE</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-800/50 border border-gray-700/50">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <span className="text-[10px] font-medium text-gray-400">IMAGE</span>
          </div>
        </div>

        {/* Privacy badge */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="tracking-wide">END-TO-END ENCRYPTED</span>
        </div>
      </div>
    </div>
  );
}
