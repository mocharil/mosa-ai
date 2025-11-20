"use client";

import { useRouter } from "next/navigation";
import ChatbotFloatingButton from "./components/ChatbotFloatingButton";
import Image from "next/image";
import { Bell, Home, FileText, CreditCard, HelpCircle, User, MapPin, Stethoscope, UserCheck, FileCheck, TrendingUp, Activity, Menu } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  const menuItems = [
    { icon: "📋", title: "Info Program JKN", onClick: () => router.push("/chat") },
    { icon: "📍", title: "Info Lokasi Faskes", onClick: () => router.push("/chat") },
    { icon: "🏥", title: "Rehab (Cicilan)", onClick: () => router.push("/chat") },
    { icon: "👥", title: "Penambahan Peserta", onClick: () => router.push("/chat") },
    { icon: "👤", title: "Info Peserta", onClick: () => router.push("/chat") },
    { icon: "📝", title: "Pendaftaran Pelayanan (Antrean)", onClick: () => router.push("/chat") },
    { icon: "🩺", title: "Konsultasi Dokter", onClick: () => router.push("/chat") },
    { icon: "📊", title: "Info Riwayat Pelayanan", onClick: () => router.push("/chat") },
    { icon: "📄", title: "Perubahan Data Peserta", onClick: () => router.push("/chat") },
    { icon: "💊", title: "Pengaduan Layanan JKN", onClick: () => router.push("/chat") },
    { icon: "🏨", title: "Info Ketersediaan Tempat Tidur", onClick: () => router.push("/chat") },
    { icon: "⋮", title: "Menu Lainnya", onClick: () => router.push("/chat") },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Wave Pattern */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-500 pb-8 overflow-hidden">
        {/* Wave SVG Background */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#F9FAFB"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>

        {/* Mobile JKN Logo */}
        <div className="relative z-10 px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                <span className="text-white font-bold text-lg">Mobile JKN</span>
              </div>
            </div>
            <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <Bell className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* User Greeting */}
          <div className="mb-2">
            <p className="text-white/90 text-sm">Hi,</p>
            <p className="text-white/80 text-xs">Semua Keluarga Anda Terlindungi (Aktif)</p>
          </div>

          {/* Version */}
          <div className="absolute top-4 right-16">
            <span className="text-white/70 text-xs">v4.4.1</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-24 -mt-2 relative z-20">
        {/* Menu Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <span className="text-[10px] text-gray-700 text-center leading-tight font-medium">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* REHAB Banner */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3">
            <h3 className="text-white font-bold text-center text-lg">
              MANFAATKAN PROGRAM REHAB
            </h3>
            <p className="text-white text-center text-xs">
              SISTEM PEMBAYARAN BERTAHAP
            </p>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <div className="flex-1 text-xs text-gray-700 space-y-1">
                <p>✓ Solusi atas Cara Mudah Bayar Tunggakan Iuran JKN-KIS</p>
                <p>✓ Pembayaran Bisa Dicicil</p>
                <p>✓ Syarat Agar Status Kepesertaan Aktif Kembali untuk Pemanfaatan Jaminan Pelayanan Kesehatan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          <button className="flex flex-col items-center gap-1 py-2 text-blue-600">
            <Home className="h-6 w-6" />
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button
            onClick={() => router.push("/chat")}
            className="flex flex-col items-center gap-1 py-2 text-gray-400 hover:text-gray-600"
          >
            <FileText className="h-6 w-6" />
            <span className="text-[10px]">Berita</span>
          </button>
          <button
            onClick={() => router.push("/chat")}
            className="flex flex-col items-center gap-1 py-2 text-gray-400 hover:text-gray-600 relative"
          >
            <div className="absolute -top-3 bg-blue-500 rounded-full p-3 shadow-lg">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <span className="text-[10px] mt-6">Kartu</span>
          </button>
          <button
            onClick={() => router.push("/chat")}
            className="flex flex-col items-center gap-1 py-2 text-gray-400 hover:text-gray-600"
          >
            <HelpCircle className="h-6 w-6" />
            <span className="text-[10px]">FAQ</span>
          </button>
          <button
            onClick={() => router.push("/chat")}
            className="flex flex-col items-center gap-1 py-2 text-gray-400 hover:text-gray-600"
          >
            <User className="h-6 w-6" />
            <span className="text-[10px]">Profil</span>
          </button>
        </div>
      </div>

      {/* Floating MOSA AI Button */}
      <ChatbotFloatingButton />
    </div>
  );
}
