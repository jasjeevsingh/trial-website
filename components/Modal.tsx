'use client'

import { useState } from 'react'
import { addToWaitlist, WaitlistType } from '@/lib/supabase'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  type: WaitlistType
}

export default function Modal({ isOpen, onClose, type }: ModalProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const isCreator = type === 'creator'
  const title = isCreator ? <span className="trial-brand">CREATOR</span> : <span className="trial-brand">USER</span>
  const subtitle = isCreator 
    ? 'Will you create content that will survive the Trial?'
    : 'Will you decide what survives in the Trial?'

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      const result = await addToWaitlist(email, type)
      
      if (result.success) {
        setIsSuccess(true)
        setEmail('')
      } else {
        setError(result.error || 'Failed to join waitlist. Please try again.')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setEmail('')
    setError('')
    setIsSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-8 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              {/* <div className="text-4xl mb-4">{isCreator ? '⚔️' : '⚖️'}</div> */}
              <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
              <p className="text-gray-400">{subtitle}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-trial-red focus:border-transparent transition-all"
                  placeholder="gladiator@trial.com"
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <div className="text-trial-red text-sm bg-red-900/20 border border-red-900/50 rounded-lg p-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Joining...' : `Join the ${isCreator ? 'Creator' : 'User'} Waitlist`}
              </button>
            </form>
          </>
        ) : (
          /* Success state */
          <div className="text-center py-8">
            <div className="text-6xl mb-6"></div>
            <div className="flex items-center justify-center">
              <h2 className="text-2xl font-bold text-white mb-4 mr-2"><span className="trial-brand">Welcome to</span></h2>
              <h2 className="text-2xl font-bold text-red mb-4"><span className="gradient-text trial-brand">TRIAL.</span></h2>
            </div>
            <p className="text-gray-400 mb-6">
              You&apos;ve been added to the waitlist. We&apos;ll notify you when it begins.
            </p>
            <button
              onClick={handleClose}
              className="btn-primary"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
