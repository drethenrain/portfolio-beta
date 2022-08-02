import { useState, useEffect } from 'react';

export default function Avatar() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('Theme') === 'dark') {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('Theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('Theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <img
      src="https://github.com/drethenrain.png"
      alt=""
      onClick={() => {
        setTheme(!theme);
      }}
      className="mx-auto mt-36 mb-8 rounded-full lg:w-28 md:w-24 w-1/4 ring-offset-2 ring-4 ring-indigo-500/100"
    />
  );
}
