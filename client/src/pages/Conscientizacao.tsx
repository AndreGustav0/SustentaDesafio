import { Leaf, TreePine, Droplets, Wind, Recycle, Home, Lightbulb, ShoppingCart, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

const Conscientizacao = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background com gradiente aprimorado */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.4) 25%, rgba(0, 0, 0, 0.5) 50%, rgba(6, 78, 59, 0.6) 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%2387CEEB;stop-opacity:1" /><stop offset="50%" style="stop-color:%23B0E0E6;stop-opacity:1" /><stop offset="100%" style="stop-color:%23E0F6FF;stop-opacity:1" /></linearGradient><linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23696969;stop-opacity:1" /><stop offset="100%" style="stop-color:%23404040;stop-opacity:1" /></linearGradient><linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23778899;stop-opacity:1" /><stop offset="100%" style="stop-color:%23556B83;stop-opacity:1" /></linearGradient><radialGradient id="sun" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:%23FFD700;stop-opacity:1" /><stop offset="70%" style="stop-color:%23FFA500;stop-opacity:0.8" /><stop offset="100%" style="stop-color:%23FF8C00;stop-opacity:0.3" /></radialGradient></defs><rect width="1200" height="800" fill="url(%23sky)"/><circle cx="950" cy="120" r="60" fill="url(%23sun)"/><ellipse cx="200" cy="80" rx="80" ry="40" fill="%23FFFFFF" opacity="0.8"/><ellipse cx="400" cy="60" rx="100" ry="50" fill="%23FFFFFF" opacity="0.7"/><ellipse cx="800" cy="90" rx="120" ry="60" fill="%23FFFFFF" opacity="0.6"/><ellipse cx="1000" cy="70" rx="90" ry="45" fill="%23FFFFFF" opacity="0.8"/><polygon points="0,400 200,200 400,250 600,180 800,220 1000,160 1200,200 1200,800 0,800" fill="url(%23mountain1)"/><polygon points="100,450 300,250 500,300 700,230 900,270 1100,210 1200,250 1200,800 0,800" fill="url(%23mountain2)" opacity="0.8"/><polygon points="0,600 150,500 300,520 450,480 600,510 750,470 900,490 1050,460 1200,480 1200,800 0,800" fill="%23228B22"/><polygon points="0,650 100,580 250,600 400,570 550,590 700,560 850,580 1000,550 1200,570 1200,800 0,800" fill="%23006400"/><g><polygon points="190,450 210,450 200,350" fill="%238B4513"/><ellipse cx="200" cy="380" rx="25" ry="40" fill="%23228B22"/><ellipse cx="190" cy="370" rx="15" ry="25" fill="%2332CD32"/><ellipse cx="210" cy="375" rx="18" ry="30" fill="%23228B22"/></g><g><polygon points="490,400 510,400 500,280" fill="%238B4513"/><ellipse cx="500" cy="320" rx="35" ry="50" fill="%23006400"/><ellipse cx="485" cy="305" rx="20" ry="30" fill="%23228B22"/><ellipse cx="515" cy="310" rx="25" ry="35" fill="%23228B22"/><ellipse cx="500" cy="290" rx="15" ry="25" fill="%2332CD32"/></g><g><polygon points="780,420 820,420 800,300" fill="%238B4513"/><ellipse cx="800" cy="340" rx="30" ry="45" fill="%23228B22"/><ellipse cx="785" cy="325" rx="18" ry="28" fill="%2332CD32"/><ellipse cx="815" cy="330" rx="22" ry="32" fill="%23228B22"/></g><g><polygon points="340,480 360,480 350,380" fill="%238B4513"/><ellipse cx="350" cy="410" rx="20" ry="35" fill="%23228B22"/><ellipse cx="340" cy="400" rx="12" ry="20" fill="%2332CD32"/><ellipse cx="360" cy="405" rx="15" ry="25" fill="%23228B22"/></g><g><polygon points="640,460 660,460 650,360" fill="%238B4513"/><ellipse cx="650" cy="390" rx="25" ry="40" fill="%23006400"/><ellipse cx="635" cy="375" rx="15" ry="25" fill="%23228B22"/><ellipse cx="665" cy="380" rx="18" ry="28" fill="%2332CD32"/></g><rect x="150" y="520" width="60" height="40" fill="%23D2691E"/><polygon points="150,520 180,500 210,520" fill="%23CD853F"/><rect x="155" y="530" width="8" height="15" fill="%23654321"/><rect x="168" y="525" width="12" height="10" fill="%23FFFF00" opacity="0.7"/><rect x="185" y="525" width="12" height="10" fill="%23FFFF00" opacity="0.7"/><rect x="850" y="540" width="80" height="50" fill="%23D2691E"/><polygon points="850,540 890,515 930,540" fill="%23CD853F"/><rect x="860" y="555" width="10" height="20" fill="%23654321"/><rect x="875" y="545" width="15" height="12" fill="%23FFFF00" opacity="0.7"/><rect x="900" y="545" width="15" height="12" fill="%23FFFF00" opacity="0.7"/><path d="M50 600 Q100 580 150 600 T250 600" stroke="%2300BFFF" stroke-width="8" fill="none" opacity="0.8"/><path d="M50 605 Q100 585 150 605 T250 605" stroke="%234169E1" stroke-width="4" fill="none" opacity="0.6"/></svg>')`
          }}
        ></div>

        {/* Elementos decorativos flutuantes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-green-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-emerald-400 rounded-full animate-bounce opacity-40"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-teal-300 rounded-full animate-ping opacity-50"></div>
          <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-green-200 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-cyan-300 rounded-full animate-bounce opacity-60"></div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Leaf size={18} className="text-green-200" />
            <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent font-semibold">
              Unidos pela Sustentabilidade
            </span>
          </div>

          {/* Título principal com efeito de gradiente */}
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl">
              Conserve o
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-200 via-green-300 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl">
              Meio Ambiente
            </span>
          </h1>

          {/* Subtítulo estilizado */}
          <div className="mb-10">
            <p className="text-2xl md:text-4xl font-medium mb-4 text-green-100 drop-shadow-lg">
              Pequenas ações, grande impacto
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Call to action adicional */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/jogo-incendio"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <TreePine size={20} className="text-green-200" />
              Jogue e Proteja a Floresta
            </Link>
          </div>
        </div>

       
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

   
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Dados Ambientais Atuais
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Desmatamento */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <TreePine className="text-red-500 mr-3" size={32} />
                <h3 className="text-xl font-bold text-gray-800">Desmatamento</h3>
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">+68%</div>
              <p className="text-gray-600 mb-3">
                Crescimento na Amazônia Legal em janeiro de 2025
              </p>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-sm text-red-700">
                  <strong>133 km²</strong> destruídos = mais de 400 campos de futebol por dia
                </p>
              </div>
            </div>

            {/* Progresso Positivo */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Leaf className="text-green-500 mr-3" size={32} />
                <h3 className="text-xl font-bold text-gray-800">Progresso</h3>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">-22%</div>
              <p className="text-gray-600 mb-3">
                Redução no desmatamento anual (2022-2023)
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-700">
                  Resultado dos esforços de fiscalização intensificada
                </p>
              </div>
            </div>

            {/* Queimadas */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <Wind className="text-orange-500 mr-3" size={32} />
                <h3 className="text-xl font-bold text-gray-800">Queimadas</h3>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">+150%</div>
              <p className="text-gray-600 mb-3">
                Aumento da área queimada em outubro de 2024
              </p>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>180 megatoneladas</strong> de carbono liberadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems and Solutions Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Wind className="text-red-500 mr-3" size={32} />
                Principais Problemas
              </h2>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Desmatamento Acelerado</h3>
                  <p className="text-red-700">
                    O crescimento de 68% no desmatamento da Amazônia em janeiro de 2025 representa 
                    uma grave ameaça à biodiversidade e ao equilíbrio climático global.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Queimadas Crescentes</h3>
                  <p className="text-orange-700">
                    O aumento de 150% nas queimadas intensifica a liberação de carbono na atmosfera, 
                    contribuindo significativamente para o aquecimento global.
                  </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Emissões de Carbono</h3>
                  <p className="text-gray-700">
                    As 180 megatoneladas de carbono liberadas pelas queimadas equivalem às emissões 
                    anuais de milhões de veículos, acelerando as mudanças climáticas.
                  </p>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <Leaf className="text-green-500 mr-3" size={32} />
                Soluções Viáveis
              </h2>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Monitoramento Intensificado</h3>
                  <p className="text-green-700">
                    Fortalecer ações de órgãos como IBAMA e ICMBio com tecnologia avançada 
                    de satélites e inteligência artificial para detecção precoce.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">PPCDAm 2023-2027</h3>
                  <p className="text-blue-700">
                    Implementar as metas do Plano de Prevenção e Controle do Desmatamento 
                    com objetivo de desmatamento zero até 2030.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Bioeconomia Sustentável</h3>
                  <p className="text-purple-700">
                    Promover alternativas econômicas sustentáveis que valorizem a floresta em pé 
                    e o ordenamento responsável do uso da terra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Actions Checklist */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Ações Individuais que Fazem a Diferença
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Cada pessoa pode contribuir diariamente para a conservação ambiental
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Separar Lixo Reciclável</h3>
              <p className="text-gray-600 text-sm">
                Separe corretamente plástico, papel, vidro e metal para reciclagem
              </p>
              <CheckCircle className="text-green-500 mx-auto mt-4" size={24} />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Reduzir Consumo</h3>
              <p className="text-gray-600 text-sm">
                Economize água, energia elétrica e reduza o desperdício de alimentos
              </p>
              <CheckCircle className="text-green-500 mx-auto mt-4" size={24} />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Evitar Plásticos</h3>
              <p className="text-gray-600 text-sm">
                Substitua plásticos descartáveis por alternativas reutilizáveis
              </p>
              <CheckCircle className="text-green-500 mx-auto mt-4" size={24} />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-yellow-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Consumo Consciente</h3>
              <p className="text-gray-600 text-sm">
                Prefira produtos certificados de origem sustentável e responsável
              </p>
              <CheckCircle className="text-green-500 mx-auto mt-4" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cada gesto conta. Junte-se a essa causa.
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Transforme conhecimento em ação e faça parte da solução para um planeta mais sustentável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.wwf.org.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Leaf size={20} />
              Saiba mais sobre conservação
            </a>

            <Link 
              to="/desafios" 
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <Home size={20} />
              Voltar aos Desafios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conscientizacao;