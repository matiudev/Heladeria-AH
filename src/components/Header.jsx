import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="relative">
            <header className="relative flex items-end justify-center p-5 bg-[#f7e6ec] h-32 gap-36 border-b-4 border-[#de2d7a]">
                <nav className="flex flex-1 justify-end text-lg font-sans font-medium text-gray-900 pr-12">
                    <ul className="flex gap-8">
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" to="/carta-productos">Carta y Productos</Link></li>
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" to="/quienes-somos">Quienes Somos</Link></li>
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" href="">Donde Estamos</Link></li>
                    </ul>
                </nav>

                <nav className="flex flex-1 justify-start text-lg font-sans font-medium text-gray-900 pl-12">
                    <ul className="flex gap-8">
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" href="">Novedades</Link></li>
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" href="">Testimonios y Opiniones</Link></li>
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" href="">Contacto</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Logo posicionado medio dentro y medio fuera */}
            <div className="absolute top-[calc(100%-100px)] left-1/2 transform -translate-x-1/2 w-36 h-36 z-10">
                <Link to="/">
                    <img
                        src="https://content.wepik.com/statics/99322541/preview-page0.jpg"
                        className='w-full h-full object-cover rounded-full border-4 border-[#de2d7a]'
                        alt="Logo"
                    />
                </Link>
            </div>
        </div>
    )
};

export default Header;