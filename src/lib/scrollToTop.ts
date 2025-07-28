import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Faz o scroll para o topo
  }, [pathname]); // Executa toda vez que a rota muda

  return null;
}
