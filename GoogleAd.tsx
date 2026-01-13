import { useEffect } from 'react';

interface GoogleAdProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  className?: string;
}

export function GoogleAd({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  className = '' 
}: GoogleAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Google Ads error:', error);
    }
  }, []);

  return (
    <div className={`google-ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX" // Remplacez par votre ID Google AdSense
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      ></ins>
      
      {/* Placeholder visuel pour développement */}
      <div className="ad-placeholder bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
        <div className="text-gray-400 mb-2">
          <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <p className="text-sm font-medium">Espace publicitaire Google Ads</p>
          <p className="text-xs mt-1">Slot: {adSlot}</p>
        </div>
      </div>
    </div>
  );
}
