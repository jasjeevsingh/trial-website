'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Modal from '@/components/Modal'
import AboutModal from '@/components/AboutModal'
import Footer from '@/components/Footer'
import { WaitlistType } from '@/lib/supabase'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<WaitlistType>('creator')
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const handleCreatorClick = () => {
    setModalType('creator')
    setIsModalOpen(true)
  }

  const handleViewerClick = () => {
    setModalType('viewer')
    setIsModalOpen(true)
  }

  const handleAboutClick = () => {
    setIsAboutOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCloseAbout = () => {
    setIsAboutOpen(false)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Hero 
        onCreatorClick={handleCreatorClick}
        onViewerClick={handleViewerClick}
        onAboutClick={handleAboutClick}
      />
      
      <Footer />
      
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={handleCloseAbout}
      />
    </main>
  )
}
