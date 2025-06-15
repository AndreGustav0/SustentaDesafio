
import DailyPhrase from '../components/DailyPhrase';
import { Link } from 'wouter';
import { Leaf, Target, Award, ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Transforme o mundo, uma ação por vez
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-800 via-emerald-700 to-green-600 bg-clip-text text-transparent mb-8 leading-tight">
              Bem-vindo ao<br />
              <span className="text-blue-600">Sustenta Desafio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Transforme pequenas ações diárias em grandes impactos ambientais. 
              Aprenda práticas sustentáveis, complete desafios e ajude a construir um planeta mais verde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/desafios" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Começar Agora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/conscientizacao" 
                className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Aprender Mais
              </Link>
            </div>
          </div>
        </div>

        {/* Daily Phrase */}
        <div className="mb-16">
          <DailyPhrase />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="mb-6 relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Leaf className="text-green-600" size={40} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Aprenda</h3>
            <p className="text-gray-600 leading-relaxed">
              Descubra práticas sustentáveis através de artigos educativos sobre reciclagem, compostagem e redução de desperdício.
            </p>
          </div>
          
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="mb-6 relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="text-blue-600" size={40} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Desafie-se</h3>
            <p className="text-gray-600 leading-relaxed">
              Complete desafios diários e acompanhe seu progresso rumo a um estilo de vida mais sustentável.
            </p>
          </div>
          
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="mb-6 relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="text-purple-600" size={40} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Teste Conhecimentos</h3>
            <p className="text-gray-600 leading-relaxed">
              Participe de quiz interativos e amplie seus conhecimentos sobre sustentabilidade e meio ambiente.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Desafios Completados</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
            <div className="text-gray-600">Usuários Ativos</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">1.2k+</div>
            <div className="text-gray-600">Quiz Respondidos</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 text-white p-12 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comece sua jornada sustentável hoje!
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Cada pequena ação conta. Junte-se a nós na missão de criar um futuro mais verde e sustentável para as próximas gerações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/desafios" 
                className="group inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Desafios
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/quiz" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Fazer Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
