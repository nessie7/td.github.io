import { useEffect, useState } from 'react'

const particles = [
  // 爱心
  { chars: ['❤', '♥', '❥', '♡'], color: 'var(--color-rose-300)' },
  // 向日葵
  { chars: ['🌻'], color: '#f5a623' },

  // 桃花
  { chars: ['🌸'], color: '#e88d9e' },
  // 雪花
  { chars: ['❄', '❅', '❆'], color: '#b5d8e8' },
]

export default function HeartParticles() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const count = 42
    const arr = []
    for (let i = 0; i < count; i++) {
      const group = particles[Math.floor(Math.random() * particles.length)]
      arr.push({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 24,
        duration: 10 + Math.random() * 16,
        delay: Math.random() * 20,
        char: group.chars[Math.floor(Math.random() * group.chars.length)],
        color: group.color,
      })
    }
    setItems(arr)
  }, [])

  return (
    <div className="heart-particles">
      {items.map((p) => (
        <span
          key={p.id}
          className="heart-particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            color: p.color,
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
