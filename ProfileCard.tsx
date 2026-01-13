import { MapPin, Heart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileCardProps {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
  status: string;
  description: string;
  isBlurred: boolean;
  onClick: () => void;
}

export function ProfileCard({
  name,
  age,
  location,
  image,
  status,
  description,
  isBlurred,
  onClick
}: ProfileCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 relative"
    >
      <div className="relative h-72 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover ${isBlurred ? 'blur-sm' : ''}`}
        />
        {isBlurred && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="text-sm">🔒 Abonnement requis</p>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {status}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl mb-1">{name}, {age}</h3>
          <button className="text-red-500 hover:scale-110 transition-transform">
            <Heart className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 mb-2 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        
        <p className={`text-gray-600 text-sm mb-3 line-clamp-2 ${isBlurred ? 'blur-sm' : ''}`}>
          {description}
        </p>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Contacter
          </button>
        </div>
      </div>
    </div>
  );
}
