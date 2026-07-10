import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { loveLetter, coupleInfo } from '../data/config'

export default function LoveLetter() {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            setIsTyping(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!isTyping) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= loveLetter.length) {
        setDisplayText(loveLetter.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 60)

    return () => clearInterval(interval)
  }, [isTyping])

  const skipTyping = () => {
    if (isTyping) {
      setDisplayText(loveLetter)
      setIsTyping(false)
    }
  }

  return (
    <section className="section" id="letter" ref={sectionRef}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        给你的情书
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        把藏在心里的话，慢慢写给你听
      </motion.p>

      <motion.div
        className="letter-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        onClick={skipTyping}
        style={{ cursor: isTyping ? 'pointer' : 'default' }}
      >
        <div className="letter-text">
          {displayText}
          {isTyping && <span className="letter-cursor" />}
        </div>
        {!isTyping && (
          <motion.div
            className="letter-signature"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            —— {coupleInfo.name1} ❤ {coupleInfo.name2}
          </motion.div>
        )}
        {isTyping && (
          <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
            点击任意位置跳过打字效果
          </div>
        )}
      </motion.div>
    </section>
  )
}
