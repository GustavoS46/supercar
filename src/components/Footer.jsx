import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Seção de Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
              <li><a href="/" className="hover:text-yellow-500 transition">Sobre</a></li>
              <li><a href="/" className="hover:text-yellow-500 transition">Serviços</a></li>
              <li><a href="/" className="hover:text-yellow-500 transition">Catálogo</a></li>
              <li><a href="/" className="hover:text-yellow-500 transition">Garagem</a></li>
              <li><a href="/" className="hover:text-yellow-500 transition">Contato</a></li>
            </ul>
          </div>
          
          {/* Seção de Contato */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contato@supercar.com" className="hover:text-yellow-500 transition">contato@supercar.com</a></li>
              <li><a href="tel:+123456789" className="hover:text-yellow-500 transition">62 3333-3333</a></li>
              <li className="text-sm">Rua dos Carros, 123 - Goiânia, GO</li>
            </ul>
          </div>
          
          {/* Seção Sobre a Empresa */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Sobre a Super Car</h4>
            <p className="text-sm text-gray-400">
              A Super Car é especializada na importação de carros novos e seminovos de luxo, com um atendimento personalizado para ajudar você a encontrar o carro dos seus sonhos.
            </p>
          </div>

        </div>
        
        {/* Rodapé de Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2024 Super Car. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
