import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { photos } from '../data/config'

export default function PhotoAlbum() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length))
  }, [])
  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % photos.length))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto])

  return (
    <section className="section" id="album">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        我们的相册
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        每一张照片，都是一段难忘的回忆
      </motion.p>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="photo-card"
            onClick={() => setLightboxIndex(index)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <div className="photo-card-overlay">
              <div className="photo-card-caption">{photo.caption}</div>
              <div className="photo-card-date">{photo.date}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation()
                prevPhoto()
              }}
            >
              ‹
            </button>
            <motion.div
              className="lightbox-content"
              key={lightboxIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={photos[lightboxIndex].src} alt={photos[lightboxIndex].caption} />
              <div className="lightbox-caption">
                {photos[lightboxIndex].caption} · {photos[lightboxIndex].date}
              </div>
            </motion.div>
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation()
                nextPhoto()
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
