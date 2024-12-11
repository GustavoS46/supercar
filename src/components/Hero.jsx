import React, { useEffect } from "react";
import hero from '../assets/Herocar3.png';
import Button from './Buttons/Button';
import ButtonTow from './Buttons/ButtonTow';
import { ChevronRight, Gauge, Zap, Settings } from 'lucide-react';
import CategoryCars from './CategoryCars';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div 
      id="home"
      className="relative bg-gradient-to-br from-slate-800 to-gray-950 text-white tracking-tighter">
      <div className="max-w-screen-xl mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-6 h-auto justify-center items-center">
          {/* Texto */}
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="w-full lg:w-1/2 flex flex-col px-4 space-y-5 justify-center text-center lg:text-left">
            <h3 className="text-[#FFC107] text-lg font-semibold uppercase tracking-wider mb-4 font-title mt-5">
              Importação Sob Demanda
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-title leading-tight mb-6">
              Encontre o Carro dos Seus Sonhos
            </h1>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-6 font-body">
              Especializados em carros importados novos e seminovos, oferecemos
              uma experiência personalizada. Escolha o modelo que deseja e
              deixe o resto conosco. Garantimos qualidade e exclusividade em
              cada entrega.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ButtonTow>
                Ver Catálogo
                <ChevronRight />
              </ButtonTow>
              <Button>
                Reserve um test drive
              </Button>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 pt-4">
              <div className="flex items-center">
                <Gauge className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-sm font-medium">Top Speed: 279 km/h</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-sm font-medium">0-100 km/h: 4.3</span>
              </div>
              <div className="flex items-center">
                <Settings className="h-8 w-8 text-red-500 mr-2" />
                <span className="text-sm font-medium">Motor: 5.0 V8</span>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              data-aos="fade-left"
              data-aos-delay="200"
              src={hero}
              alt="Carro de destaque"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>  
        <CategoryCars />
      </div>
      <div className="h-10 lg:h-20"></div> {/* Espaço extra ao final da seção */}
    </div>
  );
};

export default Hero;
