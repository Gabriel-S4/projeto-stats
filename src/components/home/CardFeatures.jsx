import React from 'react';
import { Brain, Zap, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dados do card em objetos (caso queira acresentar so adicionar um objeto usando os mesmos parametros e substituir os valores)
const cardsData = [
  {
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    title: 'Previsões de IA',
    description: 'Algoritmos avançados de machine learning para prever resultados com alta precisão.',
    linkText: 'Explorar previsões',
    linkTo: '/machine-learning-predictions',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
    title: 'Estatísticas Avançadas',
    description: 'Métricas detalhadas e análises de desempenho para embasar suas decisões.',
    linkText: 'Ver estatísticas',
    linkTo: '/advanced-metrics',
  },
  {
    icon: <Target className="w-6 h-6 text-purple-400" />,
    title: 'Gerador de Bilhetes',
    description: 'Crie bilhetes personalizados com base em análises estatísticas e previsões.',
    linkText: 'Gerar bilhete',
    linkTo: '/ticket-generator',
  },
  
];

// Estilização padronizada do card com as props
const Card = ({ icon, title, description, linkText, linkTo }) => (
  <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all shadow-lg hover:shadow-purple-500/5">
    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <Link 
      to={linkTo} 
      className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 text-sm"
    >
      {linkText} <Zap className="w-4 h-4" />
    </Link>
  </div>
);

const CardFeatures = () => {
  return (
    <section className="mb-16 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardFeatures;