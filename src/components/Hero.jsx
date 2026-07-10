import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { coupleInfo } from '../data/config'
import Logo from './Logo'

function calcDays(dateStr) {
  const anniversary = new Date(dateStr)
  const now = new Date()
  // Normalize both dates to midnight to get exact day count
  const start = new Date(anniversary.getFullYear(), anniversary.getMonth(), anniversary.getDate())
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diff = end - start
  // +1 so that the first day (anniversary) counts as day 1
  return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1
}

export default function Hero() {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const updateDays = () => {
      setDays(calcDays(coupleInfo.anniversary))
    }

    updateDays()
    // Recalculate every minute so the counter updates automatically at midnight
    const interval = setInterval(updateDays, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Logo size={80} showText={false} />
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {coupleInfo.title}
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        {coupleInfo.subtitle}
      </motion.p>

      <motion.div
        className="hero-days"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <span className="hero-days-number">{days}</span>
        <span className="hero-days-label">天 · 在一起的日子</span>
      </motion.div>

      <div className="hero-scroll-hint">
        <span>向下滚动</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
