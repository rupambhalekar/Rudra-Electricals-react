import { useEffect, useRef, useState } from 'react';

export default function Counter({ target, suffix = '', duration = 1600 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0' + suffix);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setDisplay(target + suffix);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let start = null;
            function step(ts) {
              if (!start) start = ts;
              const ratio = Math.min((ts - start) / duration, 1);
              const eased = 1 - Math.pow(1 - ratio, 3);
              setDisplay(Math.floor(eased * target) + suffix);
              if (ratio < 1) requestAnimationFrame(step);
              else setDisplay(target + suffix);
            }
            requestAnimationFrame(step);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix, duration]);

  return (
    <span className="stat-num" ref={ref}>
      {display}
    </span>
  );
}
