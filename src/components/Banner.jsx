import React from "react";
import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-600 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full animate-fade-in">
              ✨ Frontier AI Models
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-zinc-900">
              One Subscription.
              <br />
              <span className="bg-linear-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                All the AIs You Need
              </span>
            </h1>

            <p className="text-base md:text-lg text-zinc-600 max-w-lg leading-relaxed">
              Experience the full spectrum of frontier intelligence — all the most
              advanced AI models, unified under a single, powerful subscription.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button className="bg-red-600 hover:bg-red-500 transition-all px-8 py-4 rounded-2xl font-bold text-white text-lg shadow-xl shadow-red-500/25 flex items-center justify-center gap-3 group">
                Get Unlimited Access
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Feature Check marks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 text-sm font-medium text-zinc-500 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-red-500">✓</span> 50+ Frontier Models
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">✓</span> No Usage Limits
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500">✓</span> Cancel Anytime
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-2 relative flex justify-end">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-red-200/30 blur-3xl rounded-full scale-75 -z-10"></div>
            
            <div className="relative w-full max-w-75 sm:max-w-112.5">
              <img
                className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
                src={BannerImage}
                alt="AI Models Dashboard"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;