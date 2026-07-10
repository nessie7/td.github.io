import { coupleInfo } from '../data/config'

// Monogram logo: "TD" letters held together by two interlocked hearts
// The hearts form a figure-8 binding that wraps around the letters

export default function Logo({ size = 48, showText = true }) {
  const initials = coupleInfo.initials || 'TD'
  const left = initials[0] || 'T'
  const right = initials[1] || 'D'

  // Heart outline - compact, centered at origin
  const HEART_PATH = [
    'M 0 14',
    'C 0 14 -5 8 -11 5',
    'C -17 2 -17 -6 -12 -9',
    'C -7 -12 -3 -10 0 -5',
    'C 3 -10 7 -12 12 -9',
    'C 17 -6 17 2 11 5',
    'C 5 8 0 14 0 14',
    'Z',
  ].join(' ')

  return (
    <div className="logo-wrapper" style={{ height: `${size}px` }}>
      <svg
        className="logo-svg"
        viewBox="0 0 160 80"
        preserveAspectRatio="xMidYMid meet"
        style={{ height: '100%' }}
      >
        <defs>
          {/* Rose gradient for letters */}
          <linearGradient id="letterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>

          {/* Lighter rose gradient for hearts */}
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="50%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>

          {/* Soft glow for hearts */}
          <filter id="heartGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Weave clip: top half vs bottom half for binding effect */}
          <clipPath id="clipTop">
            <rect x="0" y="0" width="160" height="40" />
          </clipPath>
          <clipPath id="clipBottom">
            <rect x="0" y="40" width="160" height="40" />
          </clipPath>
          {/* Vertical clip for left/right weave at center */}
          <clipPath id="clipLeft">
            <rect x="0" y="0" width="80" height="80" />
          </clipPath>
          <clipPath id="clipRight">
            <rect x="80" y="0" width="80" height="80" />
          </clipPath>
        </defs>

        {/* === Hearts BEHIND letters (back layer) === */}
        {/* Heart A: upper-left, tilted -20°, wraps from top-left */}
        <g transform="translate(64 34) rotate(-20)">
          <path
            d={HEART_PATH}
            fill="none"
            stroke="url(#heartGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#heartGlow)"
          />
        </g>

        {/* Heart B: lower-right, tilted +20°, wraps from bottom-right */}
        <g transform="translate(96 46) rotate(20)">
          <path
            d={HEART_PATH}
            fill="none"
            stroke="url(#heartGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#heartGlow)"
          />
        </g>

        {/* === TD Letters (middle layer) === */}
        <text
          x="42"
          y="56"
          fontFamily="'Noto Serif SC', serif"
          fontSize="44"
          fontWeight="700"
          fill="url(#letterGrad)"
          textAnchor="middle"
        >
          {left}
        </text>
        <text
          x="88"
          y="56"
          fontFamily="'Noto Serif SC', serif"
          fontSize="44"
          fontWeight="700"
          fill="url(#letterGrad)"
          textAnchor="middle"
        >
          {right}
        </text>

        {/* === Hearts IN FRONT of letters (front layer) - creates binding effect === */}
        {/* 
          The hearts re-drawn on top in certain regions create the illusion 
          that they pass in front of the letters, binding them together.
        */}

        {/* Heart A front: only the top-left portion shows on top of letter */}
        <g clipPath="url(#clipTop)">
          <g transform="translate(64 34) rotate(-20)">
            <path
              d={HEART_PATH}
              fill="none"
              stroke="url(#heartGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#heartGlow)"
            />
          </g>
        </g>

        {/* Heart B front: only the bottom-right portion shows on top of letter */}
        <g clipPath="url(#clipBottom)">
          <g transform="translate(96 46) rotate(20)">
            <path
              d={HEART_PATH}
              fill="none"
              stroke="url(#heartGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#heartGlow)"
            />
          </g>
        </g>

        {/* === Weave crossing at center === */}
        {/* Heart A on top in right-center, Heart B on top in left-center */}
        <g clipPath="url(#clipRight)">
          <g transform="translate(64 34) rotate(-20)">
            <path
              d={HEART_PATH}
              fill="none"
              stroke="url(#heartGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#heartGlow)"
            />
          </g>
        </g>

        {/* Center sparkle at the crossing/binding point */}
        <circle cx="80" cy="40" r="1.5" fill="#fff" opacity="0.85" filter="url(#heartGlow)" />
      </svg>

      {showText && (
        <span className="logo-text">Our Love</span>
      )}
    </div>
  )
}
