import { MapPin, Phone, MessageCircle, Clock, CheckCircle, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EscortCardProps {
  id: number;
  name: string;
  age: number;
  ville: string;
  pays: string;
  image: string;
  categorie: string;
  services: string[];
  tarif: string;
  telephone: string;
  disponibilite: string;
  verified: boolean;
  isPremium: boolean;
  onContact: () => void;
  onViewDetails: () => void;
}

export function EscortCard({
  name,
  age,
  ville,
  pays,
  image,
  categorie,
  services,
  tarif,
  telephone,
  disponibilite,
  verified,
  isPremium,
  onContact,
  onViewDetails
}: EscortCardProps) {
  const maskedPhone = isPremium ? telephone : '*** *** ****';
  
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-300"
    >
      <div className="relative h-64 overflow-hidden cursor-pointer" onClick={onViewDetails}>
        <ImageWithFallback 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {!isPremium && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {categorie}
          </div>
          {verified && (
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Vérifiée
            </div>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-2 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${disponibilite === 'Disponible' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'}`}></div>
                <span className="text-xs">{disponibilite}</span>
              </div>
              <span className="text-sm font-medium">{tarif}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl mb-1">{name}, {age} ans</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{ville}, {pays}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 3).map((service, index) => (
              <span 
                key={index}
                className="bg-pink-50 text-pink-700 text-xs px-2 py-1 rounded-full"
              >
                {service}
              </span>
            ))}
            {services.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                +{services.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
          <Phone className="w-4 h-4 text-gray-600" />
          <span className={`text-sm ${!isPremium ? 'text-gray-400' : 'text-gray-800 font-medium'}`}>
            {maskedPhone}
          </span>
          {!isPremium && (
            <span className="ml-auto text-xs text-red-600 font-medium">🔒 Premium</span>
          )}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={onContact}
            className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            {isPremium ? 'Appeler' : 'Voir le numéro'}
          </button>
          <button 
            onClick={onViewDetails}
            className="bg-gray-100 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
