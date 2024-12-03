import React from 'react'
import { Link } from 'react-router-dom';

export default function QuienesSomos() {
    return (
        <div className="relative max-w-2xl mx-auto my-9">
            <img
                src="https://www.emporiolarosa.cl/wp-content/uploads/2021/01/marco-novedades.png"
                alt=""
                className="w-full"
            />
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-4xl text-[#de2d7a]">¿Quieres saber de nosotros?</h2>
                <p className="text-lg text-center">¡Conócenos más a fondo y descubre lo que ofrecemos!</p>
                <Link to="/quienes-somos" className="mt-4 px-4 py-2 bg-[#de2d7a] text-white rounded-md">Conocer Más</Link>
            </div>
        </div>
    );
      
}
