import { X, Crown, Check, Shield, Zap, Video, MessageCircle, Star, CreditCard, Smartphone } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

export function PremiumModal({ isOpen, onClose, onSubscribe }: PremiumModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border-2 border-red-300 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-red-600 to-pink-600 p-8 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4 mb-3">
            <Crown className="w-12 h-12 text-yellow-400" />
            <div>
              <h2 className="text-3xl mb-1">Accès Premium</h2>
              <p className="text-red-100">Débloquez tous les numéros</p>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Plan Mensuel */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-xs rounded-bl-lg">
                ⚡ POPULAIRE
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Plan Mensuel</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-gray-900">2 500</span>
                  <span className="text-xl text-gray-600">FCFA</span>
                </div>
                <div className="text-sm text-gray-600">par mois</div>
              </div>
              <button 
                onClick={onSubscribe}
                className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors"
              >
                Choisir ce plan
              </button>
            </div>

            {/* Plan Annuel */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-xs rounded-bl-lg font-medium">
                💎 -50%
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Plan Annuel</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-gray-900">15 000</span>
                  <span className="text-xl text-gray-600">FCFA</span>
                </div>
                <div className="text-sm text-green-600">1 250 FCFA/mois • Économisez 50%</div>
              </div>
              <button 
                onClick={onSubscribe}
                className="w-full bg-yellow-500 text-black py-3 rounded-xl hover:bg-yellow-600 transition-colors font-medium"
              >
                Meilleure offre
              </button>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              Tout inclus dans l'abonnement :
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="bg-red-100 p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-800 text-sm">Numéros débloqués</p>
                  <p className="text-xs text-gray-600">Contactez toutes les escorts</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Check className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-gray-800 text-sm">Accès illimité</p>
                  <p className="text-xs text-gray-600">Toutes les annonces d'Afrique</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-800 text-sm">Navigation privée</p>
                  <p className="text-xs text-gray-600">Mode incognito</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-800 text-sm">Nouvelles annonces</p>
                  <p className="text-xs text-gray-600">Alertes en temps réel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Méthodes de paiement */}
          <div className="mb-6">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-4">Modes de paiement acceptés :</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-orange-50 border-2 border-orange-200 p-4 rounded-xl text-center">
                <Smartphone className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-xs text-gray-700">Airtel Money</p>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-xl text-center">
                <Smartphone className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-xs text-gray-700">MTN Money</p>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl text-center">
                <CreditCard className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-xs text-gray-700">Carte Bancaire</p>
              </div>
              <div className="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-xl text-center">
                <CreditCard className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <p className="text-xs text-gray-700">PayPal</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm text-blue-800 text-center flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Paiement 100% sécurisé • SSL crypté
            </p>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            Annulable à tout moment • Renouvellement automatique • Service client 24/7
          </p>
        </div>
      </div>
    </div>
  );
}