'use client'

import Image from 'next/image'

interface HeroProps {
  onCreatorClick: () => void
  onViewerClick: () => void
  onAboutClick: () => void
}

export default function Hero({ onCreatorClick, onViewerClick, onAboutClick }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Logo placeholder */}
        <div className="mb-8">
          {/* <div className="w-32 h-32 mx-auto bg-gradient-to-br from-trial-red to-trial-gold rounded-full flex items-center justify-center mb-6 shadow-2xl">
            <span className="text-4xl font-black text-black">T</span>
          </div> */}
            <Image
                src="/TRIAL_logo_cropped.jpg"
                alt="Trial Logo"
                width={192}
                height={192}
                className="mx-auto mb-6 rounded-full shadow-2xl"
            />
          <h1 className="text-6xl md:text-8xl tracking-tight mb-4">
            <span className="gradient-text trial-brand">TRIAL</span>
          </h1>
        </div>

        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-light text-trial-white mb-12 tracking-wide">
          Every video’s a risk. 
          {" "}
          <span className="text-trial-red font-light inline-flex items-center gap-2">
            Only the unforgettable survive.{" "}
            <button
              onClick={onAboutClick}
              className="text-gray-400 hover:text-trial-gold transition-colors duration-300 transform hover:scale-110"
              aria-label="Learn more about Trial"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </span>
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-3xl mx-auto">
          <button
            onClick={onCreatorClick}
            className="btn-primary w-full sm:w-auto text-lg px-12 py-5 group"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="trial-brand font-semibold">ENTER the TRIAL</span>
              <span className="transform group-hover:translate-x-1 transition-transform"></span>
            </span>
          </button>
          
          {/*
          Simple scale animation between buttons
           Improved tipping scale animation 
          
          <div className="hidden sm:flex items-center justify-center">
            <div className="flex flex-col items-center relative">
               Pivot (stand) 
              <div className="w-1 h-6 bg-gray-600 rounded-full z-10"></div>

               Beam + pans as one rotating unit 
              <div className="relative w-32 h-1 mt-1 animate-tip origin-center">
               Beam 
              <div className="absolute inset-0 bg-gray-400 rounded-full h-full"></div>

               Left Pan 
              <div className="absolute -left-5 top-2 w-4 h-0.5 bg-gray-500 rounded-full"></div>

               Right Pan 
              <div className="absolute -right-5 top-2 w-4 h-0.5 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        */}
          
          <button
            onClick={onViewerClick}
            className="btn-secondary w-full sm:w-auto text-lg px-12 py-5 group"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="trial-brand font-semibold">JUDGE the TRIAL</span>
              <span className="transform group-hover:scale-110 transition-transform"></span>
            </span>
          </button>
        </div>

        {/* Bottom scale animation for mobile */}
        <div className="sm:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            {/* Scale base */}
            <div className="w-1 h-6 bg-gray-600 rounded-full"></div>
            
            {/* Scale beam with tipping animation */}
            <div className="w-12 h-0.5 bg-gray-400 rounded-full animate-[tip_3s_ease-in-out_infinite] origin-center"></div>
            
            {/* Left scale pan */}
            <div className="absolute w-3 h-0.5 bg-gray-500 rounded-full -translate-x-4 translate-y-1 animate-[leftPan_3s_ease-in-out_infinite]"></div>
            
            {/* Right scale pan */}
            <div className="absolute w-3 h-0.5 bg-gray-500 rounded-full translate-x-4 translate-y-1 animate-[rightPan_3s_ease-in-out_infinite]"></div>
            
            <div className="mt-2 text-xs text-gray-500">Choose your path</div>
          </div>
        </div>
      </div>
    </section>
  )
}
