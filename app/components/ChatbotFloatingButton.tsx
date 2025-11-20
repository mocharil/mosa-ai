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
      {/* Floating Button - Modern MOSA AI */}
      <button
        onClick={handleClick}
        className="fixed bottom-24 right-6 z-[9999] group"
        aria-label="Chat with MOSA AI"
      >
        {/* Button Container */}
        <div className="relative">
          {/* Outer Glow Rings */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 blur-xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity"></div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 animate-ping opacity-20"></div>

          {/* Main Button */}
          <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 p-0.5">
            {/* Inner White Container */}
            <div className="h-full w-full rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center p-1.5">
              <Image
                src="/mosa_logo-removebg-preview.png"
                alt="MOSA Logo"
                width={48}
                height={48}
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>

            {/* Sparkle effect */}
            <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-yellow-400 animate-pulse drop-shadow-lg" />
          </div>

          {/* AI Badge */}
          <div className="absolute -top-2 -left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg border-2 border-white animate-bounce">
            AI
          </div>

          {/* Online Indicator */}
          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
        </div>

        {/* Tooltip - Enhanced */}
        <div className="absolute bottom-full right-0 mb-4 hidden group-hover:block animate-slide-up">
          <div className="bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 backdrop-blur-xl text-white px-5 py-3 rounded-2xl text-sm whitespace-nowrap shadow-2xl border border-purple-500/30">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="font-bold text-white">MOSA AI Assistant</div>
            </div>
            <div className="text-xs text-gray-300 mb-1">Healthcare & Mental Support</div>
            <div className="text-[10px] text-purple-300 font-medium">Click to start chatting 💬</div>
            <div className="absolute top-full right-6 -mt-1">
              <div className="border-[8px] border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
