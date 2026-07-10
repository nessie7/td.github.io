import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playlist } from '../data/config'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const audioRef = useRef(null)

  const currentTrack = playlist[currentIndex]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime)
      setDuration(audio.duration || 0)
    }
    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % playlist.length)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('loadedmetadata', handleTimeUpdate)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('loadedmetadata', handleTimeUpdate)
    }
  }, [])

  // When track changes, load and play if was playing
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.load()
    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [currentIndex])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }, [isPlaying])

  const prevTrack = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
  }

  const nextTrack = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length)
  }

  const selectTrack = (index) => {
    setCurrentIndex(index)
    setIsPlaying(true)
  }

  const handleProgressClick = (e) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    audio.currentTime = ratio * duration
  }

  const formatTime = (sec) => {
    if (!sec || isNaN(sec)) return '0:00'
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const progressPercent = duration ? (progress / duration) * 100 : 0

  return (
    <>
      <audio ref={audioRef} src={currentTrack.src} preload="metadata" />

      <motion.div
        className={`music-player ${expanded ? 'expanded' : ''}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div
          className={`music-disc ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          title={isPlaying ? '暂停' : '播放'}
        >
          {isPlaying ? '♪' : '🎵'}
        </div>

        <div className="music-info">
          <span className="music-title">{currentTrack.title}</span>
          <span className="music-artist">{currentTrack.artist}</span>
          {expanded && (
            <div className="music-progress" onClick={handleProgressClick}>
              <div
                className="music-progress-bar"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}
          {expanded && (
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-light)', marginTop: '4px' }}>
              {formatTime(progress)} / {formatTime(duration)}
            </div>
          )}
        </div>

        <div className="music-controls">
          <button className="music-btn" onClick={prevTrack} title="上一首">
            ⏮
          </button>
          <button className="music-btn play-btn" onClick={togglePlay} title={isPlaying ? '暂停' : '播放'}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="music-btn" onClick={nextTrack} title="下一首">
            ⏭
          </button>
          <button
            className="music-btn"
            onClick={() => setExpanded(!expanded)}
            title={expanded ? '收起播放列表' : '展开播放列表'}
          >
            {expanded ? '⌄' : '☰'}
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="music-expanded-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="music-playlist">
                {playlist.map((track, index) => (
                  <li
                    key={index}
                    className={`music-playlist-item ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => selectTrack(index)}
                  >
                    <span className="track-num">{index + 1}</span>
                    <span className="track-name">{track.title}</span>
                    <span className="track-duration">{track.artist}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
