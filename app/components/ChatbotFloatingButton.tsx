"use client";

import { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ChatbotFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/chat");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat with MOSA"
      >
        {/* Button Circle */}
        <div className="relative">
          {/* Pulse Animation Ring 1 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 animate-ping opacity-20"></div>

          {/* Pulse Animation Ring 2 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 animate-pulse opacity-30"></div>

          {/* Main Button with MOSA Logo */}
          <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 p-2">
            <div className="h-full w-full rounded-xl bg-white flex items-center justify-center">
              <Image
                src="/mosa_logo-removebg-preview.png"
                alt="MOSA Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>

            {/* Sparkle effect */}
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent-400 animate-pulse" />
          </div>

          {/* AI Badge */}
          <div className="absolute -top-2 -left-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-lg border border-white/20">
            AI
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block animate-fade-in">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-4 py-2.5 rounded-xl text-sm whitespace-nowrap shadow-2xl border border-primary-400/30">
            <div className="font-semibold">Chat with MOSA</div>
            <div className="text-xs text-primary-100">Healthcare voice assistant</div>
            <div className="absolute top-full right-6 -mt-1">
              <div className="border-[6px] border-transparent border-t-primary-500"></div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
