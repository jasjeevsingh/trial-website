'use client'

import { useState } from 'react'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white">
            <span className="gradient-text">About</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
              <span className="text-trial-red font-semibold trial-brand">TRIAL</span> is a social network where videos have to 
              <span className="text-trial-gold font-semibold"> earn permanence. </span> 
              {/* <span className="text-white font-semibold"> Creators are the gladiators.</span>  */}
              Viewers decide what content 
              <span className="text-trial-gold font-semibold"> lives or dies.</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-2xl font-semibold text-white mb-4">Creators</h3>
                <p className="text-gray-400 leading-relaxed">
                  Create videos and face the 
                  <span className="text-trial-red font-semibold trial-brand"> TRIAL</span>. 
                  Only content that reaches a level of audience engagement survives. 
                  Every upload is a 
                  <span className="text-white font-semibold"> battle  </span>
                  for permanence in the digital arena.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-2xl font-semibold text-white mb-4">Viewers</h3>
                <p className="text-gray-400 leading-relaxed">
                  Watch, like, share, or comment. Your actions 
                  <span className="text-trial-red font-semibold trial-brand"> ALONE </span> 
                  determine which videos reach
                  <span className="text-white font-semibold"> internet immortality </span>
                   and which are sent into 
                   <span className="text-white font-semibold"> oblivion.</span>
                </p>
              </div>
              
              {/* <div className="text-center group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">👑</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Champions</h3>
                <p className="text-gray-400 leading-relaxed">
                  Videos that survive become permanent legends. They earn their place in 
                  internet history through the collective will of the audience.
                </p>
              </div> */}
            </div>

            {/* Additional info section */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4 text-center">How It Works</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-trial-red text-2xl">1.</span>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Upload & Enter</h5>
                    <p className="text-sm">Creators upload their videos to the platform.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-trial-red text-2xl">2.</span>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Trial Period</h5>
                    <p className="text-sm">Videos have a limited time to prove their worth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-trial-gold text-2xl">3.</span>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Audience Judges</h5>
                    <p className="text-sm">Viewers decide through likes, shares, and comments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-trial-gold text-2xl">4.</span>
                  <div>
                    <h5 className="font-semibold text-white mb-1">Verdict</h5>
                    <p className="text-sm">Videos either stay on the platform or vanish.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
