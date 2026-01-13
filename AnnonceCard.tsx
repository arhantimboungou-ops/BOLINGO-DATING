import { MapPin, MessageCircle, Phone, Clock } from 'lucide-react';

interface AnnonceCardProps {
  id: number;
  name: string;
  age: number;
  location: string;
  category: string;
  description: string;
  disponibilite: string;
  tarif: string;
  isBlurred: boolean;
  onClick: () => void;
}

export function AnnonceCard({
  name,
  age,
  location,
  category,
  description,
  disponibilite,
  tarif,
  isBlurred,
  onClick
}: AnnonceCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white border-2 border-red-100 rounded-xl p-4 shadow-lg hover:shadow-2xl hover:border-red-300 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl mb-1">{name}, {age} ans</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
        <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
          {category}
        </div>
      </div>
      
      <p className={`text-gray-700 text-sm mb-4 ${isBlurred ? 'blur-sm' : ''}`}>
        {description}
      </p>
      
      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1 text-green-600">
          <Clock className="w-4 h-4" />
          <span>{disponibilite}</span>
        </div>
        <div className="text-red-600 font-medium">
          {isBlurred ? '••••• FCFA' : tarif}
        </div>
      </div>
      
      <div className="flex gap-2">
        <button className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2 text-sm">
          <MessageCircle className="w-4 h-4" />
          Contacter
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Phone className="w-4 h-4" />
        </button>
      </div>
      
      {isBlurred && (
        <div className="mt-3 text-center text-xs text-gray-500">
          🔒 Abonnez-vous pour voir les détails complets
        </div>
      )}
    </div>
  );
}
