export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Glowing background circle */}
      <circle cx="20" cy="20" r="18" fill="url(#logoGradientBg)" fillOpacity="0.2" />

      {/* Main hexagon shape */}
      <path
        d="M20 4L33.6603 12V28L20 36L6.33975 28V12L20 4Z"
        stroke="url(#logoGradientStroke)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Inner hexagon */}
      <path
        d="M20 10L28.6603 15V25L20 30L11.3397 25V15L20 10Z"
        stroke="url(#logoGradientStroke)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* V shape */}
      <path
        d="M16 15L20 25L24 15"
        stroke="url(#logoGradientStroke)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connection lines */}
      <path
        d="M14 20H26"
        stroke="url(#logoGradientStroke)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="1 2"
      />

      {/* Accent dots */}
      <circle cx="20" cy="10" r="1.5" fill="url(#logoGradientFill)" />
      <circle cx="28.6603" cy="15" r="1.5" fill="url(#logoGradientFill)" />
      <circle cx="28.6603" cy="25" r="1.5" fill="url(#logoGradientFill)" />
      <circle cx="20" cy="30" r="1.5" fill="url(#logoGradientFill)" />
      <circle cx="11.3397" cy="25" r="1.5" fill="url(#logoGradientFill)" />
      <circle cx="11.3397" cy="15" r="1.5" fill="url(#logoGradientFill)" />

      {/* Glowing center */}
      <circle cx="20" cy="20" r="3" fill="url(#logoGradientFill)" />

      {/* Definitions for gradients */}
      <defs>
        <linearGradient id="logoGradientBg" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>

        <linearGradient id="logoGradientStroke" x1="6.33975" y1="4" x2="33.6603" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>

        <linearGradient id="logoGradientFill" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
