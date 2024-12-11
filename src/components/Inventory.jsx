import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RedCar from '../assets/about.png';
import WhiteCar from '../assets/whitecar.png';
import BlueCar from '../assets/bluecar.png';
import BlackCar from '../assets/blackcar.png';
import Mercedes from '../assets/mercedes.png';
import Lambo from '../assets/lambo.png';
import { ChevronRight } from 'lucide-react';
import Cards from './Cards';

const Inventory = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

    const cars = [
        {
          id: 1,
          name: "Lamborghini Huracan Evo",
          desc: "Um supercarro com motor V10 de 640 cv, tração integral e aceleração impressionante de 0 a 100 km/h em apenas 2,9 segundos.",
          price: "R$ 3.500.000",
          img: Lambo,
        },
        {
          id: 2,
          name: "Mercedes-AMG GT R",
          desc: "Com motor V8 biturbo de 585 cv, este esportivo combina luxo e desempenho, atingindo 100 km/h em 3,6 segundos.",
          price: "R$ 1.800.000",
          img: Mercedes,
        },
        {
          id: 3,
          name: "Ferrari F8 Tributo",
          desc: "Equipado com um motor V8 de 720 cv, este modelo oferece uma experiência única, acelerando de 0 a 100 km/h em 2,9 segundos.",
          price: "R$ 2.700.000",
          img: RedCar,
        },
        {
          id: 4,
          name: "Porsche 911 Turbo S",
          desc: "Um ícone de performance, com motor de 650 cv, capaz de atingir 100 km/h em 2,7 segundos e máxima precisão na pista.",
          price: "R$ 1.200.000",
          img: WhiteCar,
        },
        {
          id: 5,
          name: "McLaren 720S",
          desc: "Supercarro com motor V8 biturbo de 720 cv, aceleração de 0 a 100 km/h em 2,9 segundos e design inovador.",
          price: "R$ 2.400.000",
          img: BlueCar,
        },
        {
          id: 6,
          name: "Chevrolet Corvette Z06",
          desc: "Um esportivo americano com motor V8 de 670 cv, proporcionando potência e estilo a um preço mais acessível.",
          price: "R$ 850.000",
          img: BlackCar,
        },
      ];

      
  return (
    <div className='bg-gradient-to-r from-slate-800 to-gray-950 animate-bg-translate py-10'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col space-y-3 text-center'>
          <h1 
            data-aos='zoom-in'
            data-aos-delay='200'
            className='text-3xl md:text-4xl lg:text-5xl font-title leading-tight mb-6 text-white'>Nossa frota</h1>
          <p 
            data-aos='zoom-in'
            data-aos-delay='300'
            className='text-lg text-[#FFC107]'>
            Explore nossa incrível coleção de supercarros de luxo. Cada modelo é uma obra-prima de engenharia, design e desempenho.
          </p>
          <div 
            data-aos='zoom-in'
            data-aos-delay='400'
            className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10 p-5'>
            {
              cars.map((item) => {
                return <Cards key={item.id} item={item} />
              })
            }
          </div>
          <div 
            data-aos='zoom-in'
            data-aos-delay='400'
            className='pt-10'>
            <button className='px-4 py-2 text-red-500 hover:text-slate-800 border hover:border-2 border-red-500 hover:border-black hover:bg-white mx-auto flex rounded-lg font-semibold'>
              Veja Todos
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory