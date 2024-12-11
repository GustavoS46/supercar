import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from '../assets/banner.jpg';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-out",
        });

        AOS.refresh();
    }, []);

    return (
        <>
            <div style={{
                height: '700px',
                position: 'relative', 
            }}>
                {/* Background com blur */}
                <div style={{
                    height: '100%',
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(5px)',
                    position: 'absolute',
                    width: '100%',
                    zIndex: -1,
                }}></div>

                {/* Texto e formulário */}
                <div className="flex justify-start items-center h-full space-y-8 relative z-10 px-10">
                    <div 
                        data-aos='zoom-in'
                        data-aos-delay='100'
                        className="bg-[#201F1F] rounded-lg p-10 space-y-4 shadow-lg max-w-lg">
                        <h2 
                            data-aos='zoom-in'
                            data-aos-delay='400'
                            className="text-4xl text-white font-bold mb-5">
                            Contate-
                            <span className="text-red-500">
                                nos
                            </span>
                        </h2>
                        <form 
                            data-aos='zoom-in'
                            data-aos-delay='400'
                            action="" 
                            className="space-y-4"
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="firstname" className="font-semibold text-white mb-2">Primeiro Nome</label>
                                <input
                                    type="text"
                                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    name="firstname"
                                    placeholder="Primeiro Nome"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="lastname" className="font-semibold text-white mb-2">Último Nome</label>
                                <input
                                    type="text"
                                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    name="lastname"
                                    placeholder="Último Nome"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="font-semibold text-white mb-2">E-mail</label>
                                <input
                                    type="text"
                                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    name="email"
                                    placeholder="E-mail"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="font-semibold text-white mb-2">Mensagem</label>
                                <textarea
                                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none h-32"
                                    name="message"
                                    placeholder="Digite Sua Mensagem"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;
