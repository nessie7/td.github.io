import { useEffect, useState } from 'react'

const hearts = ['❤', '♥', '❥', '♡']

export default function HeartParticles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generate = () => {
      const count = 18
      const arr = []
      for (let i = 0; i < count; i++) {
        arr.push({
          id: i,
          left: Math.random() * 100,
          size: 12 + Math.random() * 24,
          duration: 8 + Math.random() * 12,
          delay: Math.random() * 15,
          char: hearts[Math.floor(Math.random() * hearts.length)],
        })
      }
      setParticles(arr)
    }
    generate()
  }, [])

  return (
    <div className="heart-particles">
      {particles.map((p) => (
        <span
          key={p.id}
          className="heart-particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  )
}
