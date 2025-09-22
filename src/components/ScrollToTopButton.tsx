import React, { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className='fixed z-50 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4`'
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 1000,
        display: visible ? 'block' : 'none',
        color: 'white',
        border: 'none',
        width: 48,
        height: 48,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        fontSize: 24,
        transition: 'opacity 0.3s',
      }}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
