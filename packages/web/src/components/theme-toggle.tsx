'use client';

import { useEffect, useState } from 'react';

// Three-state aware toggle: unstamped (system), light, dark. Persists choice.
export function ThemeToggle() {
  const [theme, setTheme] = useState<string>('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
    }
  }, []);

  function cycle() {
    const next = theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : 'system';
    setTheme(next);
    if (next === 'system') {
      delete document.documentElement.dataset.theme;
      localStorage.removeItem('theme');
    } else {
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
    }
  }

  return (
    <button className="theme-btn" onClick={cycle} aria-label="Cycle theme">
      {theme === 'system' ? 'Auto' : theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}
