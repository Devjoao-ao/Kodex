import React, { useEffect, useState } from 'react';
import { Menu, X, Code, Palette, Globe, MessageSquare, ChevronDown, ExternalLink } from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import PortfolioItem from './components/PortfolioItem';
import FAQItem from './components/FAQItem';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Sites modernos e responsivos com as melhores tecnologias do mercado."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design UI/UX",
      description: "Interfaces intuitivas e atraentes que encantam seus usuários."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SEO & Performance",
      description: "Otimização para mecanismos de busca e máxima performance."
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Fashion",
      description: "Loja virtual com design moderno",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Blog Corporativo",
      description: "Portal de notícias responsivo",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "App Delivery",
      description: "Aplicativo web progressivo",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "O prazo varia de acordo com a complexidade do projeto, mas geralmente entre 4 a 8 semanas."
    },
    {
      question: "Vocês oferecem suporte após o lançamento?",
      answer: "Sim, oferecemos suporte técnico e manutenção contínua para todos os nossos projetos."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Trabalhamos em etapas: planejamento, design, desenvolvimento, testes e lançamento, com feedback constante."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Code className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">KODEX</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className={`hover:text-blue-600 transition-colors ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'}`}>Home</a>
              <a href="#services" className={`hover:text-blue-600 transition-colors ${activeSection === 'services' ? 'text-blue-600' : 'text-gray-600'}`}>Serviços</a>
              <a href="#portfolio" className={`hover:text-blue-600 transition-colors ${activeSection === 'portfolio' ? 'text-blue-600' : 'text-gray-600'}`}>Portfólio</a>
              <a href="#contact" className={`hover:text-blue-600 transition-colors ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}>Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <a href="#home" className="block py-2 text-gray-600 hover:text-blue-600">Home</a>
              <a href="#services" className="block py-2 text-gray-600 hover:text-blue-600">Serviços</a>
              <a href="#portfolio" className="block py-2 text-gray-600 hover:text-blue-600">Portfólio</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600">Contato</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transformamos ideias em experiências digitais incríveis
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Especialistas em criar websites modernos, responsivos e otimizados para resultados
            </p>
            <a href="#contact" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Iniciar Projeto
              <ChevronDown className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Portfólio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Vamos criar algo incrível juntos?</h2>
            <p className="text-xl mb-8">
              Entre em contato para discutir seu projeto e transformar suas ideias em realidade.
            </p>
            <a
              href="mailto:contato@kodex.com.br"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enviar mensagem
              <MessageSquare className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8" />
                <span className="ml-2 text-xl font-bold">KODEX</span>
              </div>
              <p className="text-gray-400">
                Transformando o futuro digital, um projeto por vez.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfólio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>suportkodex@gmail.com</li>
                <li>(+244) 952 285 025</li>
                <li>Luanda, Angola</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 KODEX. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;