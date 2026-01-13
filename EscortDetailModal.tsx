import { X, MapPin, Phone, MessageCircle, Clock, CheckCircle, DollarSign, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EscortDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  escort: {
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
    description: string;
    horaires: string;
    langues: string[];
  };
  isPremium: boolean;
  onContact: () => void;
}

export function EscortDetailModal({ 
  isOpen, 
  onClose, 
  escort, 
  isPremium,
  onContact 
}: EscortDetailModalProps) {
  if (!isOpen) return null;

  const maskedPhone = isPremium ? escort.telephone : '*** *** ****';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative h-96 overflow-hidden">
          <ImageWithFallback 
            src={escort.image} 
            alt={escort.name}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="bg-red-600 text-white px-4 py-2 rounded-full font-medium shadow-lg">
              {escort.categorie}
            </div>
            {escort.verified && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <CheckCircle className="w-4 h-4" />
                Profil vérifié
              </div>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
            <h2 className="text-3xl text-white mb-2">{escort.name}, {escort.age} ans</h2>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{escort.ville}, {escort.pays}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${escort.disponibilite === 'Disponible' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'}`}></div>
                <span>{escort.disponibilite}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Contact Section */}
          <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border-2 border-red-200">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-sm text-gray-600 mb-1">Tarif</div>
                <div className="text-2xl text-red-600">{escort.tarif}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Téléphone</div>
                <div className={`text-xl ${!isPremium ? 'text-gray-400' : 'text-gray-800 font-medium'}`}>
                  {maskedPhone}
                </div>
              </div>
            </div>
            <button 
              onClick={onContact}
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-xl hover:from-red-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {isPremium ? 'Appeler maintenant' : 'Débloquer le numéro'}
            </button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
              À propos
            </h3>
            <p className="text-gray-700 leading-relaxed">{escort.description}</p>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-lg mb-3">Services proposés</h3>
            <div className="flex flex-wrap gap-2">
              {escort.services.map((service, index) => (
                <span 
                  key={index}
                  className="bg-pink-100 text-pink-700 px-4 py-2 rounded-lg text-sm"
                >
                  ✓ {service}
                </span>
              ))}
            </div>
          </div>

          {/* Informations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Horaires</span>
              </div>
              <p className="text-gray-800">{escort.horaires}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Langues</span>
              </div>
              <p className="text-gray-800">{escort.langues.join(', ')}</p>
            </div>
          </div>

          {!isPremium && (
            <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl text-center">
              <p className="text-yellow-800 mb-2">
                🔒 <strong>Abonnement requis</strong> pour voir le numéro de téléphone
              </p>
              <p className="text-sm text-yellow-700">
                Seulement 2 500 FCFA/mois pour contacter toutes les escorts
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
