import { useEffect, useRef, useState } from 'react';

export default function SpiderCursor() {
  const spiderRef = useRef(null);
  const [isMoving, setIsMoving] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let spiderX = mouseX;
    let spiderY = mouseY;
    let angle = 0;
    let moveTimeout;
    let animFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 120);
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 260);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    const animate = () => {
      const targetX = mouseX + 18;
      const targetY = mouseY + 22;
      const dx = targetX - spiderX;
      const dy = targetY - spiderY;

      spiderX += dx * 0.15;
      spiderY += dy * 0.15;

      if (Math.hypot(dx, dy) > 0.5) {
        angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      }

      if (spiderRef.current) {
        spiderRef.current.style.transform = `translate3d(${spiderX - 19}px, ${spiderY - 19}px, 0) rotate(${angle}deg)`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      clearTimeout(moveTimeout);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={spiderRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '38px',
        height: '38px',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        filter: clicked
          ? 'drop-shadow(0 0 10px #ef4444)'
          : 'drop-shadow(0 4px 6px rgba(15, 23, 42, 0.28))',
      }}
    >
      {clicked && (
        <span
          style={{
            position: 'absolute',
            inset: '-10px',
            border: '2px solid #2563eb',
            borderRadius: '50%',
            animation: 'pingWeb 0.3s ease-out forwards',
          }}
        />
      )}

      <svg viewBox="0 0 64 64" width="38" height="38" className={isMoving ? 'spider-walking' : ''}>
        <g stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" className="legs-left">
          <path d="M26 26 L12 14 L6 22" />
          <path d="M24 31 L8 26 L4 35" />
          <path d="M24 36 L9 41 L6 50" />
          <path d="M26 40 L14 52 L10 60" />
        </g>

        <g stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" className="legs-right">
          <path d="M38 26 L52 14 L58 22" />
          <path d="M40 31 L56 26 L60 35" />
          <path d="M40 36 L55 41 L58 50" />
          <path d="M38 40 L50 52 L54 60" />
        </g>

        <ellipse cx="32" cy="41" rx="9" ry="11" fill="#0f172a" />
        <path d="M32 34 L35.5 41 L32 48 L28.5 41 Z" fill="#ef4444" />
        <circle cx="32" cy="25" r="6.5" fill="#2563eb" />
        <circle cx="29.5" cy="21.5" r="1.5" fill="#ffffff" />
        <circle cx="34.5" cy="21.5" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
}