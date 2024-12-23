import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-around mx-4 lg:mx-40 my-10 text-center lg:text-left gap-8">
        {/* Logo */}
        <Link to="/" className="h-36 lg:h-52">
          <img
            src="https://content.wepik.com/statics/99322541/preview-page0.jpg"
            alt="Logo"
            className="rounded-full h-full"
          />
        </Link>
  
        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-10 lg:gap-32 text-lg font-sans font-semibold text-gray-900">
          <ul className="flex flex-col gap-5 items-center lg:items-start">
            <li className="list-disc">
              <Link className="text-gray-900 hover:text-[#de2d7a]" to="/carta-productos">Carta y Productos</Link>
            </li>
            <li className="list-disc">
              <Link className="text-gray-900 hover:text-[#de2d7a]" to="/quienes-somos">Quienes Somos</Link>
            </li>
            <li className="list-disc">
              <Link className="text-gray-900 hover:text-[#de2d7a]">Donde Estamos</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5 items-center lg:items-start">
            <li className="list-disc">
              <Link className="text-gray-900 hover:text-[#de2d7a]">Novedades</Link>
            </li>
            <li className="list-disc">
              <Link className="text-gray-900 hover:text-[#de2d7a]">Testimonios y Opiniones</Link>
            </li>
            <li className="list-disc">
              <Link className="text-gray-900 hover:text-[#de2d7a]">Contacto</Link>
            </li>
          </ul>
        </nav>
  
        {/* Redes Sociales */}
        <div className="flex flex-row lg:flex-col items-center justify-center gap-6 text-2xl">
          <a
            href="https://www.instagram.com/heladeriacocoblu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#de2d7a]"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://web.facebook.com/heladeriacocoblu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#de2d7a]"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/heladeriacocoblu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#de2d7a]"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    );
  }
  
