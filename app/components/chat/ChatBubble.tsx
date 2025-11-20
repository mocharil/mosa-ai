"use client";

import { Message } from "@/app/lib/huggingface";
import { cn } from "@/app/lib/utils";
import { parseMarkdown } from "@/app/lib/markdown";
import { Sparkles, User } from "lucide-react";

interface ChatBubbleProps {
  message: Message;
  isLatest?: boolean;
}

export default function ChatBubble({ message, isLatest = false }: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 items-start animate-slide-up mb-6",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar - Modern circular design */}
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-lg",
          isUser
            ? "bg-gradient-to-br from-primary-500 to-secondary-500"
            : "bg-gradient-to-br from-primary-500 to-accent-500 ring-2 ring-primary-500/20"
        )}
      >
        {isUser ? (
          <User className="h-5 w-5 text-white" />
        ) : (
          <Sparkles className="h-5 w-5 text-white" />
        )}
      </div>

      {/* Message content */}
      <div className="flex flex-col gap-1 max-w-[80%]">
        {/* Message bubble - Modern glass morphism style */}
        <div
          className={cn(
            "rounded-2xl px-4 py-3 backdrop-blur-sm",
            isUser
              ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-xl"
              : "bg-gray-800/90 border border-gray-700/50 text-gray-100 shadow-xl"
          )}
        >
          {/* Image if present */}
          {message.imageUrl && (
            <div className="rounded-xl overflow-hidden mb-3 border border-gray-700/30">
              <img
                src={message.imageUrl}
                alt="Uploaded image"
                className="w-full h-auto max-h-64 object-contain"
              />
            </div>
          )}

          <div className={cn(
            "text-xs leading-relaxed",
            isUser ? "text-white whitespace-pre-wrap" : ""
          )}>
            {isUser ? (
              message.content
            ) : (
              parseMarkdown(message.content)
            )}
          </div>
        </div>

        {/* Timestamp - Outside bubble */}
        <div
          className={cn(
            "text-[10px] px-2 text-gray-500",
            isUser ? "text-right" : "text-left"
          )}
        >
          {new Date(message.timestamp).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
