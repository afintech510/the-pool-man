export function WaveBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full opacity-30"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200C240 100 480 300 720 200C960 100 1200 300 1440 200V800H0V200Z"
          fill="url(#wave1)"
          opacity="0.4"
        />
        <path
          d="M0 350C300 250 600 450 900 350C1200 250 1350 400 1440 380V800H0V350Z"
          fill="url(#wave2)"
          opacity="0.3"
        />
        <path
          d="M0 500C200 430 500 570 750 480C1000 390 1250 520 1440 470V800H0V500Z"
          fill="url(#wave3)"
          opacity="0.2"
        />
        <defs>
          <linearGradient
            id="wave1"
            x1="720"
            y1="200"
            x2="720"
            y2="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ea5e9" stopOpacity="0.8" />
            <stop offset="1" stopColor="#172853" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="wave2"
            x1="720"
            y1="350"
            x2="1000"
            y2="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="1" stopColor="#172853" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="wave3"
            x1="400"
            y1="500"
            x2="1200"
            y2="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#25a9b5" stopOpacity="0.5" />
            <stop offset="1" stopColor="#172853" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
