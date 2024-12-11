import React, { useEffect } from "react";
import aboutCar from '../assets/About.png';
import Button from './Buttons/Button';
import ButtonTow from './Buttons/ButtonTow';
import { ChevronRight } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

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
      className="relative bg-gradient-to-b from-slate-800 to-gray-950  animate-bg-translate text-white tracking-tighter">
      <div className="max-w-screen-xl mx-auto py-10 px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-6 min-h-screen lg:min-h-[35vh] justify-center items-center">
          {/* Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              data-aos='fade-right'
              data-aos-delay='200'
              src={aboutCar}
              alt="Carro de destaque"
              className="max-w-full h-auto object-contain"
            />
          </div>
          {/* Texto */}
          <div 
            data-aos='fade-left'
            data-aos-delay='200'
            className="w-full lg:w-1/2 flex flex-col space-y-5 justify-center text-center lg:text-left bg-gradient-to-br from-[#1E1E1E] via-[#292828] to-[#201F1F] rounded-lg p-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-title leading-tight mb-6">
              Super Car
            </h1>
            <h2
              data-aos='fade-left'
              data-aos-delay='300' 
              className="text-[#FFC107] text-lg font-semibold uppercase tracking-wider mb-4 font-title">
              Encontre o Carro dos Seus Sonhos
            </h2>
            <p 
              data-aos='fade-left'
              data-aos-delay='400'
              className="text-gray-300 text-sm md:text-base lg:text-lg mb-6 font-body">
              Especializados em carros importados novos e seminovos, oferecemos
              uma experiência personalizada. Escolha o modelo que deseja e
              deixe o resto conosco. Garantimos qualidade e exclusividade em
              cada entrega.
            </p>
            <div 
              data-aos='fade-left'
              data-aos-delay='500'
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ButtonTow>
                Ver Catálogo
                <ChevronRight />
              </ButtonTow>
              <Button>
                Reserve um test drive
              </Button>
            </div>
          </div>
        </div>  
      </div>
      <div className="h-10 lg:h-20"></div> {/* Espaço extra ao final da seção */}
    </div>
  )
}

export default About;
