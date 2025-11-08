// Apple-style Memoji SVG Avatars

export const DavidAvatar = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="davidSkin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD4B3"/>
        <stop offset="100%" stopColor="#FFC299"/>
      </linearGradient>
    </defs>
    {/* Head */}
    <circle cx="100" cy="100" r="90" fill="url(#davidSkin)"/>
    {/* Hair */}
    <path d="M40 70 Q40 20, 100 15 Q160 20, 160 70 L160 100 Q155 80, 140 75 Q120 68, 100 68 Q80 68, 60 75 Q45 80, 40 100 Z" fill="#2C2416"/>
    {/* Eyes */}
    <circle cx="75" cy="95" r="8" fill="#4A3728"/>
    <circle cx="125" cy="95" r="8" fill="#4A3728"/>
    <circle cx="77" cy="93" r="3" fill="#FFFFFF"/>
    <circle cx="127" cy="93" r="3" fill="#FFFFFF"/>
    {/* Eyebrows */}
    <path d="M60 82 Q75 78, 85 80" stroke="#2C2416" strokeWidth="3" fill="none"/>
    <path d="M115 80 Q125 78, 140 82" stroke="#2C2416" strokeWidth="3" fill="none"/>
    {/* Nose */}
    <path d="M100 95 L95 110 L105 110 Z" fill="#FFB88C" opacity="0.3"/>
    {/* Mouth - Professional smile */}
    <path d="M85 125 Q100 135, 115 125" stroke="#C44536" strokeWidth="3" fill="none"/>
    {/* Suit collar */}
    <path d="M60 180 L70 150 L100 160 L130 150 L140 180" fill="#1a1a2e"/>
    <rect x="85" y="145" width="30" height="40" fill="#FFFFFF"/>
    {/* Tie */}
    <path d="M100 148 L95 165 L100 180 L105 165 Z" fill="#00539F"/>
    {/* Professional glasses */}
    <ellipse cx="75" cy="95" rx="15" ry="12" fill="none" stroke="#2C2416" strokeWidth="2"/>
    <ellipse cx="125" cy="95" rx="15" ry="12" fill="none" stroke="#2C2416" strokeWidth="2"/>
    <line x1="90" y1="95" x2="110" y2="95" stroke="#2C2416" strokeWidth="2"/>
  </svg>
);

export const FarhanAvatar = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="farhanSkin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A574"/>
        <stop offset="100%" stopColor="#C99966"/>
      </linearGradient>
      <linearGradient id="techGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D9FF"/>
        <stop offset="100%" stopColor="#9D4EDD"/>
      </linearGradient>
    </defs>
    {/* Head */}
    <circle cx="100" cy="100" r="90" fill="url(#farhanSkin)"/>
    {/* Modern hair */}
    <path d="M35 75 Q35 25, 100 18 Q165 25, 165 75 L165 95 Q160 75, 145 68 Q125 60, 100 60 Q75 60, 55 68 Q40 75, 35 95 Z" fill="#1a1a1a"/>
    {/* Beard */}
    <path d="M70 120 Q70 145, 85 155 Q100 160, 115 155 Q130 145, 130 120" fill="#1a1a1a" opacity="0.4"/>
    {/* Eyes with tech vibe */}
    <circle cx="75" cy="95" r="9" fill="#2C1810"/>
    <circle cx="125" cy="95" r="9" fill="#2C1810"/>
    <circle cx="77" cy="93" r="4" fill="#00D9FF"/>
    <circle cx="127" cy="93" r="4" fill="#00D9FF"/>
    {/* Eyebrows */}
    <path d="M58 80 Q73 76, 88 78" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
    <path d="M112 78 Q127 76, 142 80" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
    {/* Nose */}
    <path d="M100 95 L96 108 L104 108 Z" fill="#B8956A" opacity="0.4"/>
    {/* Mouth - confident smile */}
    <path d="M82 125 Q100 132, 118 125" stroke="#8B4513" strokeWidth="2.5" fill="none"/>
    {/* Hoodie */}
    <path d="M50 180 L65 155 L80 160 L100 165 L120 160 L135 155 L150 180" fill="#9D4EDD"/>
    {/* Headphones around neck */}
    <path d="M70 145 Q60 140, 55 150" stroke="url(#techGlow)" strokeWidth="4" fill="none"/>
    <path d="M130 145 Q140 140, 145 150" stroke="url(#techGlow)" strokeWidth="4" fill="none"/>
    <circle cx="55" cy="150" r="6" fill="url(#techGlow)"/>
    <circle cx="145" cy="150" r="6" fill="url(#techGlow)"/>
  </svg>
);

export const KashanAvatar = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="kashanSkin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D9A066"/>
        <stop offset="100%" stopColor="#C78F57"/>
      </linearGradient>
      <linearGradient id="leaderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF006E"/>
        <stop offset="50%" stopColor="#9D4EDD"/>
        <stop offset="100%" stopColor="#00D9FF"/>
      </linearGradient>
    </defs>
    {/* Head */}
    <circle cx="100" cy="100" r="90" fill="url(#kashanSkin)"/>
    {/* Professional hair */}
    <path d="M38 70 Q38 22, 100 16 Q162 22, 162 70 L162 98 Q158 78, 143 70 Q123 62, 100 62 Q77 62, 57 70 Q42 78, 38 98 Z" fill="#242424"/>
    {/* Facial hair - professional beard */}
    <path d="M68 118 Q68 142, 82 152 Q100 158, 118 152 Q132 142, 132 118" fill="#242424" opacity="0.5"/>
    {/* Eyes - confident leader look */}
    <circle cx="75" cy="92" r="9" fill="#1a0f08"/>
    <circle cx="125" cy="92" r="9" fill="#1a0f08"/>
    <circle cx="78" cy="90" r="4" fill="#FFFFFF"/>
    <circle cx="128" cy="90" r="4" fill="#FFFFFF"/>
    {/* Eyebrows - strong */}
    <path d="M57 78 Q72 74, 87 76" stroke="#242424" strokeWidth="4" fill="none"/>
    <path d="M113 76 Q128 74, 143 78" stroke="#242424" strokeWidth="4" fill="none"/>
    {/* Nose */}
    <path d="M100 92 L95 107 L105 107 Z" fill="#BA8A5C" opacity="0.4"/>
    {/* Mouth - leadership presence */}
    <path d="M80 128 Q100 134, 120 128" stroke="#654321" strokeWidth="3" fill="none"/>
    {/* Business casual shirt */}
    <path d="M55 180 L68 152 L85 158 L100 162 L115 158 L132 152 L145 180" fill="#1a1a2e"/>
    <rect x="88" y="148" width="24" height="35" fill="#FFFFFF"/>
    {/* Smart watch - tech leader */}
    <rect x="40" y="165" width="15" height="15" rx="2" fill="url(#leaderGlow)"/>
    <rect x="42" y="167" width="11" height="11" rx="1" fill="#000000"/>
    {/* Leadership badge */}
    <circle cx="120" cy="155" r="8" fill="url(#leaderGlow)" opacity="0.3"/>
  </svg>
);
