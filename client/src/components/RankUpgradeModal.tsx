
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trophy, Star, Sparkles, Award } from 'lucide-react';
import RankMedal from './RankMedal';

interface RankUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  newRank: string;
  points: number;
}

const RankUpgradeModal = ({ isOpen, onClose, newRank, points }: RankUpgradeModalProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      setTimeout(() => setShowContent(true), 300);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  const getRankMessage = (rank: string) => {
    switch (rank) {
      case 'silver':
        return {
          title: 'Parabéns! 🥈',
          message: 'Você conquistou a medalha de Prata!',
          description: 'Continue assim para alcançar a medalha de Ouro!',
          color: 'from-gray-400 to-gray-600',
          bgGradient: 'from-slate-100 to-gray-200'
        };
      case 'gold':
        return {
          title: 'Incrível! 🥇',
          message: 'Você conquistou a medalha de Ouro!',
          description: 'Você é um verdadeiro campeão da sustentabilidade!',
          color: 'from-yellow-400 to-yellow-600',
          bgGradient: 'from-yellow-100 to-amber-200'
        };
      default:
        return {
          title: 'Parabéns! 🥉',
          message: 'Você conquistou a medalha de Bronze!',
          description: 'Continue completando desafios para subir de rank!',
          color: 'from-amber-600 to-orange-700',
          bgGradient: 'from-orange-100 to-amber-200'
        };
    }
  };

  const rankInfo = getRankMessage(newRank);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md border-0 bg-transparent shadow-none">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Confetti Animation */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none z-10">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                >
                  {i % 3 === 0 ? (
                    <Star className="text-yellow-400" size={12} />
                  ) : i % 3 === 1 ? (
                    <Sparkles className="text-blue-400" size={10} />
                  ) : (
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${rankInfo.bgGradient} opacity-20`} />

          <DialogHeader className="relative z-20 pt-8 pb-4">
            <DialogTitle className="text-center text-2xl font-bold text-gray-800">
              <div className={`transform transition-all duration-500 ${showContent ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                {rankInfo.title}
              </div>
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative z-20 px-6 pb-8">
            {/* Trophy Section */}
            <div className={`text-center mb-6 transform transition-all duration-700 delay-200 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="relative inline-block">
                <div className={`absolute inset-0 bg-gradient-to-r ${rankInfo.color} rounded-full blur-lg opacity-30 scale-110`} />
                <div className="relative bg-white rounded-full p-4 shadow-lg">
                  <Trophy className={`mx-auto text-6xl bg-gradient-to-r ${rankInfo.color} bg-clip-text text-transparent`} size={64} />
                </div>
              </div>
            </div>

            {/* Medal and Message */}
            <div className={`text-center mb-6 transform transition-all duration-700 delay-400 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{rankInfo.message}</h3>
              
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full p-3 shadow-lg border-2 border-gray-100">
                  <RankMedal rank={newRank} points={points} size="large" />
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{rankInfo.description}</p>
            </div>

            {/* Points Display */}
            <div className={`text-center mb-6 transform transition-all duration-700 delay-600 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <div className="flex items-center justify-center space-x-2">
                  <Award className="text-green-600" size={20} />
                  <span className="text-lg font-semibold text-gray-700">
                    {points} pontos totais
                  </span>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className={`transform transition-all duration-700 delay-800 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🎉 Continuar Jornada
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RankUpgradeModal;
