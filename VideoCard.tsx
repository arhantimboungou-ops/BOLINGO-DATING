import { Play, Eye, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoCardProps {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  rating: number;
  category: string;
  isBlurred: boolean;
  isPremium: boolean;
  onClick: () => void;
}

export function VideoCard({
  title,
  thumbnail,
  duration,
  views,
  rating,
  category,
  isBlurred,
  isPremium,
  onClick
}: VideoCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 relative group"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={thumbnail} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${isBlurred ? 'blur-md' : ''}`}
        />
        {isBlurred && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl mb-2">🔒</div>
              <p className="text-white text-sm">Contenu Premium</p>
            </div>
          </div>
        )}
        {!isBlurred && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </div>
        )}
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
          {category}
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
          {duration}
        </div>
        {isPremium && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
            PREMIUM
          </div>
        )}
      </div>
      
      <div className="p-3 bg-gray-800">
        <h3 className="text-white text-sm mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {views}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
              {rating}
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Il y a 2h
          </span>
        </div>
      </div>
    </div>
  );
}
