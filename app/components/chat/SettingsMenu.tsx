"use client";

import { useEffect } from "react";
import { X, Volume2, VolumeX, FileText, Trash2, Zap } from "lucide-react";
import { cn } from "@/app/lib/utils";

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  autoSpeak: boolean;
  demoMode: boolean;
  onToggleAutoSpeak: () => void;
  onToggleDemoMode: () => void;
  onGenerateSummary: () => void;
  onClearChat: () => void;
  messagesCount: number;
  isProcessing: boolean;
}

export default function SettingsMenu({
  isOpen,
  onClose,
  autoSpeak,
  demoMode,
  onToggleAutoSpeak,
  onToggleDemoMode,
  onGenerateSummary,
  onClearChat,
  messagesCount,
  isProcessing,
}: SettingsMenuProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50",
          "bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl",
          "border-l border-white/10 shadow-2xl",
          "animate-slide-in-right"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-2">
          {/* Demo Mode Toggle */}
          <button
            onClick={onToggleDemoMode}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-xl transition-all",
              "hover:bg-white/10 active:scale-95",
              demoMode
                ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
                : "bg-white/5 border border-white/10"
            )}
          >
            <div
              className={cn(
                "p-2.5 rounded-lg",
                demoMode
                  ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                  : "bg-white/10"
              )}
            >
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-white font-medium">Demo Mode</div>
              <div className="text-xs text-gray-400">
                {demoMode ? "Fast mock responses" : "Use real AI"}
              </div>
            </div>
            {/* Toggle indicator */}
            <div
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative",
                demoMode ? "bg-yellow-500" : "bg-gray-600"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                  demoMode ? "right-1" : "left-1"
                )}
              />
            </div>
          </button>

          {/* Auto-speak Toggle */}
          <button
            onClick={onToggleAutoSpeak}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-xl transition-all",
              "hover:bg-white/10 active:scale-95",
              autoSpeak
                ? "bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30"
                : "bg-white/5 border border-white/10"
            )}
          >
            <div
              className={cn(
                "p-2.5 rounded-lg",
                autoSpeak
                  ? "bg-gradient-to-br from-primary-500 to-accent-500"
                  : "bg-white/10"
              )}
            >
              {autoSpeak ? (
                <Volume2 className="w-5 h-5 text-white" />
              ) : (
                <VolumeX className="w-5 h-5 text-white" />
              )}
            </div>
            <div className="flex-1 text-left">
              <div className="text-white font-medium">Auto Speak</div>
              <div className="text-xs text-gray-400">
                {autoSpeak ? "Aktif" : "Nonaktif"}
              </div>
            </div>
            {/* Toggle indicator */}
            <div
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative",
                autoSpeak ? "bg-primary-500" : "bg-gray-600"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                  autoSpeak ? "right-1" : "left-1"
                )}
              />
            </div>
          </button>

          {/* Divider */}
          <div className="h-px bg-white/10 my-4" />

          {/* Generate Summary */}
          <button
            onClick={() => {
              onGenerateSummary();
              onClose();
            }}
            disabled={messagesCount === 0 || isProcessing}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-xl transition-all",
              "hover:bg-white/10 active:scale-95",
              "bg-white/5 border border-white/10",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            <div className="p-2.5 rounded-lg bg-white/10">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-white font-medium">Generate Summary</div>
              <div className="text-xs text-gray-400">
                Ringkas percakapan
              </div>
            </div>
          </button>

          {/* Clear Chat */}
          <button
            onClick={() => {
              onClearChat();
              onClose();
            }}
            disabled={messagesCount === 0}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-xl transition-all",
              "hover:bg-red-500/20 active:scale-95",
              "bg-white/5 border border-white/10",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            <div className="p-2.5 rounded-lg bg-red-500/20">
              <Trash2 className="w-5 h-5 text-red-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-white font-medium">Clear Chat</div>
              <div className="text-xs text-gray-400">
                Hapus semua pesan
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="text-center text-xs text-gray-500">
            <div className="mb-1">MOSA Voice Assistant</div>
            <div>Healthcare with Safe Talk</div>
          </div>
        </div>
      </div>
    </>
  );
}
