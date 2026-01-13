import { X, Check, Crown, Zap } from 'lucide-react';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

export function PaywallModal({ isOpen, onClose, onSubscribe }: PaywallModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Crown className="w-10 h-10" />
            <h2 className="text-3xl">Accès Premium</h2>
          </div>
          <p className="text-pink-100">Débloquez toutes les fonctionnalités</p>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-6 mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl text-pink-600">2 500</span>
                <span className="text-xl text-gray-600">FCFA</span>
                <span className="text-gray-500">/mois</span>
              </div>
              <p className="text-sm text-gray-600">Annulable à tout moment</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-3">Fonctionnalités incluses :</h3>
            
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-gray-800">Messages illimités</p>
                <p className="text-sm text-gray-500">Chattez avec toutes les femmes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-gray-800">Voir tous les profils</p>
                <p className="text-sm text-gray-500">Accès à 500+ profils actifs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-gray-800">Photos complètes débloquées</p>
                <p className="text-sm text-gray-500">Voir toutes les photos des profils</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-gray-800">Mode invisible</p>
                <p className="text-sm text-gray-500">Naviguez en toute discrétion</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded-full">
                <Zap className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-800">Badge Premium</p>
                <p className="text-sm text-gray-500">Profil mis en avant</p>
              </div>
            </div>
          </div>

          <button 
            onClick={onSubscribe}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-xl text-lg hover:from-pink-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
          >
            S'abonner maintenant
          </button>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 text-center">
              💳 Paiement sécurisé via Mobile Money (Airtel/MTN)
            </p>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            En vous abonnant, vous acceptez nos conditions d'utilisation
          </p>
        </div>
      </div>
    </div>
  );
}
