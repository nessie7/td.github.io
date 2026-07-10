import HeartParticles from './components/HeartParticles'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PhotoAlbum from './components/PhotoAlbum'
import MusicPlayer from './components/MusicPlayer'
import LoveLetter from './components/LoveLetter'
import Timeline from './components/Timeline'
import Logo from './components/Logo'

export default function App() {
  return (
    <>
      <HeartParticles />
      <Navigation />
      <Hero />
      <PhotoAlbum />
      <LoveLetter />
      <Timeline />
      <MusicPlayer />
      <footer className="footer">
        <Logo size={40} showText={false} />
        <div style={{ marginTop: '12px' }}>
          <span>Made with </span>
          <span className="footer-heart">❤</span>
          <span> by us, for us</span>
        </div>
      </footer>
    </>
  )
}
