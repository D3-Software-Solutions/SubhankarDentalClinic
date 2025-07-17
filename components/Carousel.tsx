import React, { useState, useEffect, useRef } from 'react';

const images = [
  '/images/board.jpeg',
  '/images/dentique-main.jpeg',
  '/images/machinery.jpeg',
  '/images/reception1.jpeg',
  '/images/reception2.jpeg',
];

const imageAlts = [
  'Clinic Board',
  'Dentique Main Entrance',
  'Dental Machinery',
  'Reception Area 1',
  'Reception Area 2',
];

const AUTOPLAY_INTERVAL = 10000; // 10 seconds

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Autoplay logic
  useEffect(() => {
    if (isPaused) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused]);

  // Progress bar logic
  useEffect(() => {
    if (isPaused) return;
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(100, (elapsed / AUTOPLAY_INTERVAL) * 100));
    }, 100);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current, isPaused]);

  // Reset progress on manual navigation
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setProgress(0);
  };

  const handlePauseToggle = () => setIsPaused((p) => !p);

  return (



  <section className="pt-12 pb-6 bg-white" id="features">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 relative inline-block after:block after:mx-auto after:mt-2 after:w-20 after:h-1 after:bg-accent after:rounded">Photos</h2>


    <div className="relative w-full max-w-8xl mx-auto rounded-xl overflow-hidden shadow-lg mb-8 mt-8" aria-label="Clinic Image Carousel">
      {/* Prev/Next Buttons (inside image area) */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-accent text-accent hover:text-white rounded-full p-4 text-2xl border-2 border-accent shadow-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-accent text-accent hover:text-white rounded-full p-4 text-2xl border-2 border-accent shadow-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        &#8594;
      </button>
      <div className="relative bg-gray-200 flex items-center justify-center" style={{height: '48rem'}}>
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={imageAlts[idx]}
            className={`absolute top-0 left-0 w-full h-full object-cover ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'} transition-opacity duration-700`}
            style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}
        {/* Pause/Play Button (bottom right, inside image area) */}
        <button
          className="absolute bottom-4 right-4 z-20 bg-white/80 hover:bg-accent text-accent hover:text-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-accent transition"
          onClick={handlePauseToggle}
          aria-label={isPaused ? 'Play Carousel' : 'Pause Carousel'}
        >
          {isPaused ? (
            // Play icon (right-pointing triangle)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><polygon points="6,4 16,10 6,16" /></svg>
          ) : (
            // Pause icon (two vertical bars)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><rect x="4" y="4" width="4" height="12"/><rect x="12" y="4" width="4" height="12"/></svg>
          )}
        </button>
      </div>
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-300">
        <div
          className="h-2 bg-accent transition-all duration-100"
          style={{ width: `${progress}%` }}
          aria-label="Slide progress timer"
        />
      </div>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-accent' : 'bg-white border border-accent'} transition-colors`}
            onClick={() => { setCurrent(idx); setProgress(0); }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>


  </div>
</section>




  );
};

export default Carousel; 