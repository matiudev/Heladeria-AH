import React from 'react';
import { Link } from 'react-router-dom';

export default function QuienesSomos() {
    return (
        <div className="relative max-w-2xl mx-auto my-9 px-4 sm:px-6 lg:px-0">
            {/* Imagen de fondo */}
            <img
                src="https://www.emporiolarosa.cl/wp-content/uploads/2021/01/marco-novedades.png"
                alt="Marco de novedades"
                className="w-full h-auto"
            />
            {/* Contenido sobre la imagen */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#de2d7a] font-bold">
                    ¿Quieres saber de nosotros?
                </h2>
                <p className="text-sm sm:text-lg mt-2 text-gray-700">
                    ¡Conócenos más a fondo y descubre lo que ofrecemos!
                </p>
                <Link 
                    to="/quienes-somos" 
                    className="mt-4 px-4 py-2 bg-[#de2d7a] text-white rounded-md text-sm sm:text-base hover:bg-[#c32263] transition">
                    Conocer Más
                </Link>
            </div>
        </div>
    );
}
