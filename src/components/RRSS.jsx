import React from 'react'

export default function RRSS() {

  const rrss = [
    {
      nombre: "Facebook",
      url: "https://web.facebook.com/heladeriacocoblu",
      img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/459123394_17984101235707896_970423910015711851_n.jpg?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFt4yOZT0bKyDInqgrPdM7sHKC2l7Nzz_kcoLaXs3PP-R1xCpzfl2FFIKPrEeKyQ4qsimPCxO4M5gv-gLF-bvdz&_nc_ohc=pvX_jitoYxAQ7kNvgGe6EDd&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=A_jhRdyEf7Y0DXUHCXcvE1X&oh=00_AYDvLOvS8qXlS8u8chUld7vC2NV5yk94TTHFWH9DS_L6Ug&oe=6754410B",
      iconClass: "fa-brands fa-facebook", // Usando Font Awesome, por ejemplo
    },
    {
      nombre: "Instagram",
      url: "https://www.instagram.com/heladeriacocoblu/",
      img: "https://instagram.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/386203068_834100231740594_8222013932434019851_n.jpg?stp=dst-jpg_e15_fr_p1080x1080_tt6&_nc_ht=instagram.fiqq2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=qiFiNKthBxYQ7kNvgFM_UcT&_nc_gid=0a5c2a6693d64e49b66a370dd0bb978d&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYD3DSTwEaPV6ewmlTqO3z0a7hSfYVFz6QBpEihySqNdjA&oe=67546678&_nc_sid=d885a2",
      iconClass: "fa-brands fa-instagram", // Usando Font Awesome
    },
    {
      nombre: "TikTok",
      url: "https://www.instagram.com/heladeriacocoblu/",
      img: "https://instagram.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/386203068_834100231740594_8222013932434019851_n.jpg?stp=dst-jpg_e15_fr_p1080x1080_tt6&_nc_ht=instagram.fiqq2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=qiFiNKthBxYQ7kNvgFM_UcT&_nc_gid=0a5c2a6693d64e49b66a370dd0bb978d&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYD3DSTwEaPV6ewmlTqO3z0a7hSfYVFz6QBpEihySqNdjA&oe=67546678&_nc_sid=d885a2",
      iconClass: "fa-brands fa-tiktok", // Usando Font Awesome
    },
  ];
  
  return (
    <div className="flex flex-col items-center px-6 sm:px-12 lg:px-24 py-10 w-full">
      {/* Título */}
      <h2 className="font-tittle2 text-3xl sm:text-5xl lg:text-7xl text-[#de2d7a] py-4 text-center">
        Síguenos en Nuestras Redes
      </h2>

      {/* Redes Sociales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
        {rrss.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-center relative"
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad al abrir enlaces externos
          >
            <div className="relative w-full h-60">
              {/* Imagen de fondo */}
              <img
                src={social.img}
                alt={social.nombre}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              />
              {/* Fondo negro con opacidad y contenido al hacer hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* Icono de la red social */}
                <i className={`text-white text-5xl ${social.iconClass}`}></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
