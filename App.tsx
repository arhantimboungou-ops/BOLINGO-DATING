import { useState, useEffect } from 'react';
import { EscortCard } from './components/EscortCard';
import { EscortDetailModal } from './components/EscortDetailModal';
import { PremiumModal } from './components/PremiumModal';
import { GoogleAd } from './components/GoogleAd';
import { Heart, Users, MapPin, Crown, Search, Filter, Globe, TrendingUp, Download, Github, Sparkles, Flame } from 'lucide-react';

interface Escort {
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
  description: string;
  horaires: string;
  langues: string[];
}

export default function App() {
  const [selectedPays, setSelectedPays] = useState('Tous les pays');
  const [selectedVille, setSelectedVille] = useState('Toutes les villes');
  const [selectedCategorie, setSelectedCategorie] = useState('Toutes');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPremium, setShowPremium] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [selectedEscort, setSelectedEscort] = useState<Escort | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  // SEO: Update page title dynamically
  useEffect(() => {
    const baseTitle = 'AfricaEscorts - Annonces d\'Escorts Premium en Afrique';
    if (selectedPays !== 'Tous les pays') {
      document.title = `Escorts ${selectedPays} ${selectedVille !== 'Toutes les villes' ? '- ' + selectedVille : ''} | AfricaEscorts`;
    } else {
      document.title = baseTitle;
    }
  }, [selectedPays, selectedVille]);

  const paysAfricains = [
    'Tous les pays',
    'Congo-Brazzaville',
    'RD Congo',
    'Cameroun',
    'Côte d\'Ivoire',
    'Sénégal',
    'Gabon',
    'Bénin',
    'Togo',
    'Burkina Faso',
    'Mali',
    'Niger',
    'Tchad',
    'Guinée',
    'Madagascar',
    'Angola',
    'Mozambique',
    'Tanzanie',
    'Kenya',
    'Ouganda',
    'Rwanda',
    'Burundi',
    'Éthiopie',
    'Afrique du Sud',
    'Nigeria',
    'Ghana'
  ];

  const villesParPays: Record<string, string[]> = {
    'Congo-Brazzaville': ['Toutes les villes', 'Brazzaville', 'Pointe-Noire', 'Dolisie', 'Nkayi', 'Ouesso', 'Owando', 'Impfondo'],
    'RD Congo': ['Toutes les villes', 'Kinshasa', 'Lubumbashi', 'Mbuji-Mayi', 'Kisangani', 'Goma', 'Bukavu', 'Kananga'],
    'Cameroun': ['Toutes les villes', 'Yaoundé', 'Douala', 'Garoua', 'Bamenda', 'Bafoussam', 'Ngaoundéré'],
    'Côte d\'Ivoire': ['Toutes les villes', 'Abidjan', 'Yamoussoukro', 'Bouaké', 'Daloa', 'San-Pédro', 'Korhogo'],
    'Sénégal': ['Toutes les villes', 'Dakar', 'Thiès', 'Saint-Louis', 'Touba', 'Kaolack', 'Ziguinchor'],
    'Gabon': ['Toutes les villes', 'Libreville', 'Port-Gentil', 'Franceville', 'Oyem', 'Moanda'],
    'Bénin': ['Toutes les villes', 'Cotonou', 'Porto-Novo', 'Parakou', 'Abomey-Calavi', 'Djougou'],
    'Nigeria': ['Toutes les villes', 'Lagos', 'Abuja', 'Kano', 'Ibadan', 'Port Harcourt', 'Benin City'],
    'Ghana': ['Toutes les villes', 'Accra', 'Kumasi', 'Tamale', 'Takoradi', 'Cape Coast'],
    'Kenya': ['Toutes les villes', 'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'],
    'Afrique du Sud': ['Toutes les villes', 'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth']
  };

  const categories = ['Toutes', 'Escort Premium', 'Massage', 'Étudiante', 'Mature', 'Duo', 'Trans', 'Domicile'];

  // Pas de profils fictifs - juste un tableau vide
  const escorts: Escort[] = [];

  const handleContact = (escort: Escort) => {
    if (!isPremium) {
      setShowPremium(true);
    } else {
      alert(`📞 Numéro de ${escort.name}: ${escort.telephone}\n\nVous pouvez maintenant l'appeler ou lui envoyer un message WhatsApp.`);
    }
  };

  const handleSubscribe = () => {
    setIsPremium(true);
    setShowPremium(false);
    alert('🎉 Abonnement Premium activé ! Vous pouvez maintenant voir tous les numéros de téléphone.');
  };

  const villesDisponibles = selectedPays !== 'Tous les pays' && villesParPays[selectedPays] 
    ? villesParPays[selectedPays] 
    : ['Toutes les villes'];

  const filteredEscorts = escorts.filter(escort => {
    const matchesPays = selectedPays === 'Tous les pays' || escort.pays === selectedPays;
    const matchesVille = selectedVille === 'Toutes les villes' || escort.ville === selectedVille;
    const matchesCategorie = selectedCategorie === 'Toutes' || escort.categorie === selectedCategorie;
    const matchesSearch = escort.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         escort.ville.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         escort.pays.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPays && matchesVille && matchesCategorie && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white shadow-2xl sticky top-0 z-40 border-b-4 border-pink-400/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm border-2 border-white/30 shadow-xl">
                <Heart className="w-8 h-8 animate-pulse" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-3xl flex items-center gap-2">
                  AfricaEscorts
                  <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                </h1>
                <p className="text-xs text-pink-100">Plateforme N°1 d'escorts premium en Afrique</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowDownloadModal(true)}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 transition-all"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm hidden md:inline">GitHub</span>
              </button>
              {!isPremium ? (
                <button 
                  onClick={() => setShowPremium(true)}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full flex items-center gap-2 hover:from-yellow-500 hover:to-orange-600 transition-all shadow-xl animate-pulse font-medium"
                >
                  <Crown className="w-5 h-5" />
                  <span className="text-sm">Devenir VIP</span>
                </button>
              ) : (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full flex items-center gap-2 shadow-xl font-medium">
                  <Crown className="w-5 h-5" />
                  <span className="text-sm">Membre VIP</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-lg relative z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-bold">0</div>
              <div className="text-xs text-gray-600">Escorts actives</div>
            </div>
            <div className="text-center">
              <div className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">26</div>
              <div className="text-xs text-gray-600">Pays africains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">24/7</div>
              <div className="text-xs text-gray-600">Service actif</div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Banner with Ad */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black relative z-20">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-sm flex items-center gap-2">
                <Flame className="w-5 h-5 animate-bounce" />
                <span className="font-bold">Offre exclusive :</span> 2 500 FCFA/mois • Tous les numéros débloqués • 26 pays d'Afrique
              </p>
              <button 
                onClick={() => setShowPremium(true)}
                className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all shadow-xl font-medium"
              >
                S'abonner maintenant
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Google Ad - Top Banner */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 relative z-10">
        <GoogleAd adSlot="1234567890" adFormat="horizontal" className="mb-6" />
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-lg sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par nom ou ville..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white/90 backdrop-blur-sm"
              />
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-4 h-4 z-10" />
                <select
                  value={selectedPays}
                  onChange={(e) => {
                    setSelectedPays(e.target.value);
                    setSelectedVille('Toutes les villes');
                  }}
                  className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none bg-white/90 backdrop-blur-sm"
                >
                  {paysAfricains.map(pays => (
                    <option key={pays} value={pays}>{pays}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-4 h-4 z-10" />
                <select
                  value={selectedVille}
                  onChange={(e) => setSelectedVille(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none bg-white/90 backdrop-blur-sm"
                >
                  {villesDisponibles.map(ville => (
                    <option key={ville} value={ville}>{ville}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-4 h-4 z-10" />
                <select
                  value={selectedCategorie}
                  onChange={(e) => setSelectedCategorie(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none bg-white/90 backdrop-blur-sm"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-3 rounded-2xl hover:from-pink-600 hover:to-rose-600 transition-all flex items-center justify-center gap-2 shadow-lg">
                <TrendingUp className="w-4 h-4" />
                <span>Populaires</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative z-10">
        {/* Google Ad - Side Banner */}
        <div className="mb-8">
          <GoogleAd adSlot="0987654321" adFormat="horizontal" />
        </div>

        {/* Empty State - No profiles */}
        <div className="text-center py-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-2 border-pink-200 max-w-2xl mx-auto">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 blur-2xl opacity-50"></div>
              <Heart className="w-24 h-24 text-pink-500 relative animate-pulse" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Plateforme en construction
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Nous préparons la meilleure plateforme d'escorts premium d'Afrique.
              <br />
              Bientôt disponible dans 26 pays africains.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl border-2 border-pink-200">
                <div className="text-4xl mb-3">💎</div>
                <h3 className="text-lg mb-2 text-gray-800">Pour les Escorts</h3>
                <p className="text-sm text-gray-600">
                  Publiez vos annonces gratuitement et touchez des milliers de clients potentiels à travers l'Afrique
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="text-lg mb-2 text-gray-800">Pour les Clients</h3>
                <p className="text-sm text-gray-600">
                  Accédez à des milliers d'annonces vérifiées dans toute l'Afrique pour seulement 2 500 FCFA/mois
                </p>
              </div>
            </div>

            <button 
              onClick={() => setShowPremium(true)}
              className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all text-lg flex items-center justify-center gap-3 mx-auto"
            >
              <Crown className="w-6 h-6" />
              <span>Pré-inscription VIP</span>
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Ad - Middle Banner */}
        <div className="my-8">
          <GoogleAd adSlot="1122334455" adFormat="horizontal" />
        </div>

        {/* Info Section with Sensual Design */}
        <div className="mt-12 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl border-4 border-pink-400/30 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <Heart className="animate-pulse" fill="currentColor" />
              Pourquoi AfricaEscorts ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl mb-3">Couverture Panafricaine</h3>
                <p className="text-pink-100 text-sm">
                  26 pays africains couverts avec des milliers d'annonces dans chaque région
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl mb-3">Profils Vérifiés</h3>
                <p className="text-pink-100 text-sm">
                  Système de vérification rigoureux pour garantir l'authenticité des annonces
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl mb-3">100% Discret</h3>
                <p className="text-pink-100 text-sm">
                  Paiements sécurisés, navigation privée et confidentialité totale garantie
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/20">
              <p className="text-sm text-pink-100 leading-relaxed">
                🌍 <strong>Couverture complète :</strong> Congo-Brazzaville, RD Congo, Cameroun, Côte d'Ivoire, Sénégal, Gabon, Nigeria, Kenya, Afrique du Sud et 17 autres pays africains<br />
                💳 <strong>Paiement flexible :</strong> Mobile Money (Airtel/MTN), Carte bancaire, PayPal • Seulement 2 500 FCFA/mois<br />
                ⚡ <strong>Accès instantané :</strong> Activation immédiate après paiement • Annulation possible à tout moment
              </p>
            </div>
          </div>
        </div>

        {/* Google Ad - Bottom Banner */}
        <div className="my-8">
          <GoogleAd adSlot="5544332211" adFormat="horizontal" />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm space-y-3 pb-8">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border-2 border-pink-200">
            <p className="mb-2">🔒 Paiement 100% sécurisé • 🌍 Toute l'Afrique • 📱 Compatible mobile & desktop</p>
            <p className="text-xs text-gray-500">
              Réservé aux adultes de 18 ans et plus. Plateforme de mise en relation entre adultes consentants.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © 2026 AfricaEscorts • Tous droits réservés • Service d'annonces classifiées pour adultes
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PremiumModal
        isOpen={showPremium}
        onClose={() => setShowPremium(false)}
        onSubscribe={handleSubscribe}
      />

      {selectedEscort && (
        <EscortDetailModal
          isOpen={!!selectedEscort}
          onClose={() => setSelectedEscort(null)}
          escort={selectedEscort}
          isPremium={isPremium}
          onContact={() => handleContact(selectedEscort)}
        />
      )}

      {/* Download/GitHub Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowDownloadModal(false)}></div>
          <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl p-8 border-4 border-pink-200">
            <button 
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ✕
            </button>
            
            <div className="text-center mb-6">
              <Github className="w-16 h-16 mx-auto mb-4 text-gray-800" />
              <h2 className="text-3xl mb-2 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Télécharger le code source
              </h2>
              <p className="text-gray-600">
                Exportez ce projet vers GitHub pour le déployer sur votre propre serveur
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border-2 border-pink-200 mb-6">
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-pink-600" />
                Instructions d'export
              </h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">1</span>
                  <span>Dans Figma Make, cliquez sur le bouton <strong>"Export to Code"</strong> ou <strong>"Download"</strong> en haut de l'interface</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">2</span>
                  <span>Le code sera téléchargé en tant que fichier ZIP contenant tous les fichiers du projet</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">3</span>
                  <span>Décompressez le fichier ZIP sur votre ordinateur</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">4</span>
                  <span>Initialisez un dépôt Git : <code className="bg-white px-2 py-1 rounded text-xs">git init</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">5</span>
                  <span>Créez un nouveau dépôt sur GitHub.com</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">6</span>
                  <span>Liez votre dépôt local et poussez le code :<br/>
                    <code className="bg-white px-2 py-1 rounded text-xs block mt-2">git remote add origin [URL-DE-VOTRE-REPO]</code>
                    <code className="bg-white px-2 py-1 rounded text-xs block mt-1">git add .</code>
                    <code className="bg-white px-2 py-1 rounded text-xs block mt-1">git commit -m "Initial commit"</code>
                    <code className="bg-white px-2 py-1 rounded text-xs block mt-1">git push -u origin main</code>
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-blue-800">
                💡 <strong>Conseil :</strong> Avant de déployer, n'oubliez pas de remplacer l'ID Google AdSense dans <code className="bg-white px-2 py-1 rounded text-xs">GoogleAd.tsx</code> par votre propre ID.
              </p>
            </div>

            <button 
              onClick={() => setShowDownloadModal(false)}
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 rounded-xl hover:from-rose-700 hover:to-pink-700 transition-all"
            >
              Compris, merci !
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
