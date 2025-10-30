import React from 'react';

export function Confetti({ count = 30, durationMs = 1200 }) {
  const pieces = React.useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // vw
      delay: Math.random() * 200,
      rotate: Math.random() * 360,
      color: ['#1CB0F6', '#58CC02', '#FFD635', '#FF8A34', '#7B61FF', '#FF6FAF'][i % 6]
    }))
  ), [count]);

  React.useEffect(() => {
    const t = setTimeout(() => {}, durationMs);
    return () => clearTimeout(t);
  }, [durationMs]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {pieces.map(p => (
        <span
          key={p.id}
          className="absolute animate-confetti"
          style={{
            left: `${p.left}vw`,
            top: '-20px',
            animationDelay: `${p.delay}ms`,
            animationDuration: `${durationMs}ms`,
            transform: `rotate(${p.rotate}deg)`,
            color: p.color
          }}
        >
          ●
        </span>
      ))}
    </div>
  );
}


