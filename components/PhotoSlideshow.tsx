'use client';
import { useEffect, useState } from 'react';

export default function PhotoSlideshow({
  images,
  intervalMs = 6000,
}: {
  images: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Respect people who turn off animations: stay on the first image
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      {/* dark overlay keeps the text readable on every image */}
      <div className="absolute inset-0 bg-sage-900/50" />
    </div>
  );
}