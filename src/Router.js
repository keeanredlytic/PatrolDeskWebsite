import React, { useState, useEffect } from 'react';
import App from './App';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate (back/forward buttons)
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Route rendering logic
  const renderPage = () => {
    switch (currentPath) {
      case '/privacy':
        return <Privacy />;
      case '/terms':
        return <Terms />;
      case '/contact':
        return <Contact />;
      default:
        return <App />;
    }
  };

  return renderPage();
}

export default Router;

