import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Using Lucide icons for menu and close

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="relative">
            {/* Desktop Header */}
            <header className="hidden md:flex relative items-end justify-center p-5 bg-[#f7e6ec] h-32 gap-36 border-b-4 border-[#de2d7a]">
                <nav className="flex flex-1 justify-end text-lg font-sans font-medium text-gray-900 pr-12">
                    <ul className="flex gap-8">
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" to="/carta-productos">Carta y Productos</Link></li>
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" to="/quienes-somos">Quienes Somos</Link></li>
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" to="/donde-estamos">Donde Estamos</Link></li>
                    </ul>
                </nav>

                <nav className="flex flex-1 justify-start text-lg font-sans font-medium text-gray-900 pl-12">
                    <ul className="flex gap-8">
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" to="/novedades">Novedades</Link></li>
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" to="/testimonios">Testimonios y Opiniones</Link></li>
                        <li><Link className="text-gray-900 hover:text-[#de2d7a]" to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Mobile Header */}
            <header className="md:hidden relative bg-[#f7e6ec] border-b-4 border-[#de2d7a] p-4">
                <div className="flex justify-between items-center">
                    {/* Hamburger Menu */}
                    <button
                        onClick={toggleMobileMenu}
                        className="z-20 relative"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Menu Drawer */}
                    {isMobileMenuOpen && (
                        <div className="fixed inset-0 bg-[#f7e6ec] z-10 pt-20 px-6">
                            <nav className="space-y-6">
                                <ul className="space-y-4 text-center">
                                    <li><Link onClick={toggleMobileMenu} className="block text-lg text-gray-900 hover:text-[#de2d7a]" to="/carta-productos">Carta y Productos</Link></li>
                                    <li><Link onClick={toggleMobileMenu} className="block text-lg text-gray-900 hover:text-[#de2d7a]" to="/quienes-somos">Quienes Somos</Link></li>
                                    <li><Link onClick={toggleMobileMenu} className="block text-lg text-gray-900 hover:text-[#de2d7a]" to="/donde-estamos">Donde Estamos</Link></li>
                                    <li><Link onClick={toggleMobileMenu} className="block text-lg text-gray-900 hover:text-[#de2d7a]" to="/novedades">Novedades</Link></li>
                                    <li><Link onClick={toggleMobileMenu} className="block text-lg text-gray-900 hover:text-[#de2d7a]" to="/testimonios">Testimonios y Opiniones</Link></li>
                                    <li><Link onClick={toggleMobileMenu} className="block text-lg text-gray-900 hover:text-[#de2d7a]" to="/contacto">Contacto</Link></li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Logo - Responsive Sizing and Positioning */}
            <div className="absolute top-[calc(100%-50px)] sm:top-[calc(100%-100px)] left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-36 sm:h-36 z-20">
                <Link to="/">
                    <img
                        src="https://content.wepik.com/statics/99322541/preview-page0.jpg"
                        className="w-full h-full object-cover rounded-full border-4 border-[#de2d7a]"
                        alt="Logo"
                    />
                </Link>
            </div>


        </div>
    )
}

export default Header;