"use client";

import { useRouter } from "next/navigation";
import {
  Bell,
  CreditCard,
  Building2,
  FileText,
  MapPin,
  Calendar,
  Heart,
  Phone,
  Shield,
  MessageCircle,
  ChevronRight,
  User
} from "lucide-react";
import ChatbotFloatingButton from "./components/ChatbotFloatingButton";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  const mainFeatures = [
    {
      icon: <CreditCard className="h-7 w-7" />,
      title: "e-Card JKN",
      subtitle: "Kartu Digital",
      gradient: "from-blue-500 to-blue-600",
      onClick: () => router.push("/chat")
    },
    {
      icon: <Building2 className="h-7 w-7" />,
      title: "Faskes",
      subtitle: "Cari Faskes",
      gradient: "from-primary-500 to-primary-600",
      onClick: () => router.push("/chat")
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: "Rujukan",
      subtitle: "Info Rujukan",
      gradient: "from-purple-500 to-purple-600",
      onClick: () => router.push("/chat")
    },
    {
      icon: <Calendar className="h-7 w-7" />,
      title: "Riwayat",
      subtitle: "Pelayanan",
      gradient: "from-orange-500 to-orange-600",
      onClick: () => router.push("/chat")
    },
  ];

  const quickAccess = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Panduan Sehat",
      description: "Tips kesehatan harian",
      color: "text-red-600",
      bg: "bg-red-50",
      onClick: () => router.push("/chat")
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Layanan Care Center",
      description: "1500-400",
      color: "text-blue-600",
      bg: "bg-blue-50",
      onClick: () => router.push("/chat")
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Informasi Iuran",
      description: "Cek & bayar iuran",
      color: "text-green-600",
      bg: "bg-green-50",
      onClick: () => router.push("/chat")
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Chat Mosa",
      description: "Asisten virtual AI",
      color: "text-purple-600",
      bg: "bg-purple-50",
      onClick: () => router.push("/chat")
    },
  ];

  const bannerSlides = [
    {
      title: "Tanya MOSA!",
      subtitle: "Asisten Virtual AI untuk Informasi JKN & Dukungan Emosional",
      gradient: "from-primary-600 to-primary-500",
      action: "Chat Sekarang",
      onClick: () => router.push("/chat")
    },
    {
      title: "Kesehatan Mental Anda Penting",
      subtitle: "Ruang aman untuk curhat dan mendapat dukungan profesional",
      gradient: "from-purple-600 to-pink-500",
      action: "Mulai Curhat",
      onClick: () => router.push("/chat")
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - JKN Style with Green Background */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-500 shadow-md">
        <div className="container mx-auto px-4 py-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow">
                <User className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-xs text-primary-100">Selamat Datang,</p>
                <p className="text-sm font-semibold text-white">Peserta JKN</p>
              </div>
            </div>

            {/* Notification Bell - Chat Button Location */}
            <button
              onClick={() => router.push("/chat")}
              className="relative p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <Bell className="h-6 w-6 text-white" />
              {/* Notification Dot */}
              <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 border border-white"></div>
            </button>
          </div>

          {/* Logo & Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center shadow-lg p-1.5">
              <Image
                src="/mosa_logo-removebg-preview.png"
                alt="MOSA Logo"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">MOSA</h1>
              <p className="text-xs text-primary-100">Healthcare voice assistant with safe talk</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Ask MOSA anything about healthcare..."
              onClick={() => router.push("/chat")}
              readOnly
              className="w-full px-4 py-3 pr-10 rounded-lg bg-white/95 backdrop-blur text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white shadow-sm cursor-pointer transition-all hover:shadow-md"
            />
            <MessageCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-600" />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Banner Carousel - MOSA Promo */}
        <div className="mt-4 mb-6">
          <div
            onClick={bannerSlides[0].onClick}
            className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-transform hover:scale-[1.02]`}
          >
            <div className={`bg-gradient-to-r ${bannerSlides[0].gradient} p-6 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="h-6 w-6" />
                    <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">AI POWERED</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{bannerSlides[0].title}</h3>
                  <p className="text-sm text-white/90 mb-3">{bannerSlides[0].subtitle}</p>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all hover:shadow-lg hover:scale-[1.02]">
                    {bannerSlides[0].action}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="hidden sm:block">
                  <div className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <Heart className="h-12 w-12 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Grid - JKN Cards */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Layanan Utama</h2>
          <div className="grid grid-cols-4 gap-3">
            {mainFeatures.map((feature, index) => (
              <button
                key={index}
                onClick={feature.onClick}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className={`h-12 w-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow`}>
                  {feature.icon}
                </div>
                <p className="text-xs font-semibold text-gray-800 leading-tight mb-1">
                  {feature.title}
                </p>
                <p className="text-[10px] text-gray-500">
                  {feature.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Access List */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Akses Cepat</h2>
          <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
            {quickAccess.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className={`h-12 w-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <div className={item.color}>
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Card - Mental Health Support */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-purple-900 mb-1">Dukungan Kesehatan Mental</h3>
                <p className="text-sm text-purple-700 mb-3">
                  Butuh seseorang untuk diajak bicara? MOSA siap mendengarkan dan memberikan dukungan emosional.
                </p>
                <button
                  onClick={() => router.push("/chat")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  Mulai Chat dengan MOSA
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Kontak Darurat</h2>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="grid grid-cols-2 gap-3">
              <a href="tel:1500400" className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-xs text-blue-600 font-medium">BPJS Care Center</p>
                  <p className="text-sm font-bold text-blue-700">1500-400</p>
                </div>
              </a>
              <a href="tel:119" className="flex items-center gap-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <Heart className="h-5 w-5 text-red-600" />
                <div>
                  <p className="text-xs text-red-600 font-medium">Kesehatan Jiwa</p>
                  <p className="text-sm font-bold text-red-700">119 ext 8</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <ChatbotFloatingButton />
    </div>
  );
}
