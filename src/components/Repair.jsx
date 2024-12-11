import React, { useEffect } from "react";
import About from '../assets/Aboutx.webp'; 
import steering from '../assets/steering.png';
import battery from '../assets/battery.png';
import tyre from '../assets/tyre.png';
import maintenance from '../assets/maintenance.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Repair = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-out",
        });
    
        AOS.refresh();
      }, []);

  return (
    <div className="relative bg-gradient-to-br from-orange-700 to-orange-900 text-white tracking-tighter">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img 
                data-aos='fade-right'
                data-aos-delay='200'
                src={About} alt="MacLaren P1" className="max-w-full h-auto object-contain" />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-1/2 px-6 text-center lg:text-left">
            <h2 
                data-aos='fade-left'
                data-aos-delay='200'
                className="text-[#FFC107] text-lg font-semibold uppercase tracking-wider mb-4">Performance de Carros</h2>
            <h1 
                data-aos='fade-left'
                data-aos-delay='300'
                className="text-3xl md:text-4xl lg:text-5xl font-title leading-tight mb-6">Aumente o Desempenho do Seu Carro</h1>
            <p 
                data-aos='fade-left'
                data-aos-delay='400'
                className="text-gray-300 text-sm md:text-base lg:text-lg mb-6 font-body">
              Especializados em otimização de performance, oferecemos serviços para melhorar a potência, controle e eficiência do seu veículo.
              Nossa equipe está pronta para personalizar seu carro para o máximo desempenho.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button 
                data-aos='fade-left'
                data-aos-delay='500'
                className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>

        {/* Seção de Serviços */}
        <div 
            data-aos='zoom-in'
            data-aos-delay='500'
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 py-10">
          {/* Card de Serviço */}
          <div className="flex flex-col items-center text-center space-y-4 px-4">
            <div className="bg-orange-50 px-4 rounded-full">
              <img src={steering} alt="Desempenho da direção" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold">Ajuste de Direção</h3>
            <p className="text-gray-300 text-sm">Melhore a precisão e o controle da direção do seu carro com ajustes especializados.</p>
            <button className="text-red-500 hover:text-red-600  font-bold">Saiba mais</button>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-orange-50 p-4 rounded-full">
              <img src={battery} alt="Otimização da Bateria" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold">Otimização da Bateria</h3>
            <p className="text-gray-300 text-sm">Melhoramos a performance da bateria, garantindo maior durabilidade e eficiência.</p>
            <button className="text-red-500 hover:text-red-600  font-bold">Saiba mais</button>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-orange-50 p-4 rounded-full">
              <img src={tyre} alt="Desempenho dos Pneus" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold">Ajuste de Pneus</h3>
            <p className="text-gray-300 text-sm">Melhore a aderência e a estabilidade do seu veículo para máxima performance em pista.</p>
            <button className="text-red-500 hover:text-red-600  font-bold">Saiba mais</button>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 mb-2">
            <div className="bg-orange-50 p-4 rounded-full">
              <img src={maintenance} alt="Otimização do Motor" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-semibold">Ajuste de Motor</h3>
            <p className="text-gray-300 text-sm">Maximize a potência e a performance do motor com nosso serviço de remap.</p>
            <button className="text-red-500 hover:text-red-600 font-bold">Saiba mais</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair;
