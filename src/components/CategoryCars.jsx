import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CategoryCars = () => {

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
            data-aos='zoom-in'
            data-aos-delay='300'
            className="bg-gradient-to-br from-[#343434] via-[#444444] to-[#292929] text-white shadow-2xl rounded-lg p-6 lg:p-8 mx-auto mt-8 max-w-screen-lg border border-[#FFC107]">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-[#FFC107] font-title">
                Filtre os Carros Ideais para Você
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Categoria: Carros de Luxo */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="luxuryCars" className="text-md font-medium text-[#FFC107] font-body">
                        Carros de Luxo
                    </label>
                    <select
                        id="luxuryCars"
                        className="bg-[#222222] text-white border border-[#FFC107] rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    >
                        <option value="">Selecione a opção</option>
                        <option value="sports">Esportivo</option>
                        <option value="convertible">Conversível</option>
                        <option value="suv">SUV de Luxo</option>
                    </select>
                </div>

                {/* Categoria: Maiores Marcas */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="brands" className="text-md font-medium text-[#FFC107] font-body">
                        Marcas de Luxo
                    </label>
                    <select
                        id="brands"
                        className="bg-[#222222] text-white border border-[#FFC107] rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    >
                        <option value="">Selecione a opção</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="bmw">BMW</option>
                        <option value="lamborghini">Lamborghini</option>
                        <option value="porsche">Porsche</option>
                    </select>
                </div>

                {/* Categoria: Tipos de Carros */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="carTypes" className="text-md font-medium text-[#FFC107] font-body">
                        Tipos de Carros
                    </label>
                    <select
                        id="carTypes"
                        className="bg-[#222222] text-white border border-[#FFC107] rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    >
                        <option value="">Selecione a opção</option>
                        <option value="sedan">Sedan</option>
                        <option value="hatch">Hatch</option>
                        <option value="coupe">Coupé</option>
                        <option value="suv">SUV</option>
                    </select>
                </div>

                {/* Categoria: Tração */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="traction" className="text-md font-medium text-[#FFC107] font-body">
                        Tração
                    </label>
                    <select
                        id="traction"
                        className="bg-[#222222] text-white border border-[#FFC107] rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    >
                        <option value="">Selecione a opção</option>
                        <option value="front">Dianteira</option>
                        <option value="rear">Traseira</option>
                        <option value="awd">AWD</option>
                    </select>
                </div>

                {/* Categoria: Ano de Fabricação */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="year" className="text-md font-medium text-[#FFC107] font-body">
                        Ano de Fabricação
                    </label>
                    <select
                        id="year"
                        className="bg-[#222222] text-white border border-[#FFC107] rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    >
                        <option value="">Selecione a opção</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CategoryCars;



