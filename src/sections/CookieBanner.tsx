import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-light border-t border-gold/20 p-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-300 text-sm text-center sm:text-left">
          Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies.
        </p>
        <button
          onClick={acceptCookies}
          className="flex-shrink-0 px-6 py-2 bg-gold hover:bg-gold-light text-navy font-semibold rounded-lg transition-colors"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
