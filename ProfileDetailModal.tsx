import { X, MapPin, Heart, MessageCircle, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    name: string;
    age: number;
    location: string;
    image: string;
    status: string;
    description: string;
    looking: string;
    occupation: string;
    education: string;
  };
  isBlurred: boolean;
  onMessage: () => void;
}

export function ProfileDetailModal({ 
  isOpen, 
  onClose, 
  profile, 
  isBlurred,
  onMessage 
}: ProfileDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative h-80 overflow-hidden">
          <ImageWithFallback 
            src={profile.image} 
            alt={profile.name}
            className={`w-full h-full object-cover ${isBlurred ? 'blur-md' : ''}`}
          />
          {isBlurred && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white px-8 py-4 rounded-2xl shadow-lg text-center">
                <p className="text-lg mb-1">🔒 Photo privée</p>
                <p className="text-sm text-gray-600">Abonnez-vous pour voir</p>
              </div>
            </div>
          )}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-3xl text-white mb-1">{profile.name}, {profile.age}</h2>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex gap-3 mb-6">
            <button 
              onClick={onMessage}
              className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl hover:from-pink-600 hover:to-red-600 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Envoyer un message
            </button>
            <button className="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-100 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">À propos</h3>
              <p className={`text-gray-700 ${isBlurred ? 'blur-sm' : ''}`}>
                {profile.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Recherche</span>
                </div>
                <p className={`${isBlurred ? 'blur-sm' : ''}`}>{profile.looking}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">Profession</span>
                </div>
                <p className={`${isBlurred ? 'blur-sm' : ''}`}>{profile.occupation}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl md:col-span-2">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm">Éducation</span>
                </div>
                <p className={`${isBlurred ? 'blur-sm' : ''}`}>{profile.education}</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700">{profile.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
