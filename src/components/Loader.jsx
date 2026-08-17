import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader${hidden ? ' is-hidden' : ''}`} aria-hidden="true">
      <div className="loader-mark">
        <img src="/assets/logo-icon-accent.webp" alt="" width="56" height="61" />
      </div>
    </div>
  );
}
