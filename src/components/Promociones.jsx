import SeparadorTop from "./Separadores/SeparadorTop";
import SeparadorButtom from "./Separadores/SeparadorButtom";
import { Link } from 'react-router-dom';


  // Array of ice cream image URLs
  const iceCreamPromos = [
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/468229852_1084406670043281_5390462982543739244_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHXVR7a4bhFhoib8w1Qn61SGo1YMJDNQ0AajVgwkM1DQPGHL_GlSbrn4itQWO6zEyEhzhm1zTBrx5le30_KYKaP&_nc_ohc=0wJLKXcUlEAQ7kNvgEa-8DO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=ANw4agR8LD14tHu0RoGbGaj&oh=00_AYBuqO2AdXP4-9S33NTXndqZYJv3D6lSRDRQr4_nNJZ0Dw&oe=675443DC",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/467682443_1081111770372771_6372908991685624882_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHsr4S6f4EzK_ManbLu4ngGZq8Mhvc-VWZmrwyG9z5VZuQRZJ-rSADzvsPlKYZFYIsd2T2pYRNLoQiKO1TWWKdn&_nc_ohc=LufiFZ7Pj98Q7kNvgHJRrrn&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=A0LoxUEDNQKv-Q_gkaDsrCG&oh=00_AYDkAS1OytQMajLdikQFtyLclJmc8EvGNv9GaiZ921AKMg&oe=675441CB",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/467185072_1080455053771776_7136912577758667305_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGgE_kYqG57SJCyAlIEO6BUinfShrPben2Kd9KGs9t6fbzms2K4hUv_wk0-73uSCDCV57_c50MicsYSv-LZWJp7&_nc_ohc=nzI-lpXMVkUQ7kNvgHfL1Wb&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AoYMWGII8pg_F-YdYJWcAXD&oh=00_AYCge48tzs_8oZr4imb6g2puX5LeyUy0p4dqlj0hXQ7Zcw&oe=6754481E",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t51.75761-15/464157491_17989017539707896_3689111557699302275_n.jpg?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHy9YBUGHQNhb_4RleI4BT8_Q4GYp467kf9DgZinjruR_TfvoW54jQGIGLxGanDCgHjm0tq1mJyKqlNzwyvwpr2&_nc_ohc=o9i9CLwwYjoQ7kNvgGmmul6&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AoCExkKOaKt9NexC1N1-1tE&oh=00_AYDvgDKLkjujr7D5AGsJlsAh1kksXysOZxnlVD4YpO_EEw&oe=675440A8",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t51.75761-15/464371773_17989665554707896_8347649517769964988_n.jpg?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH2I_Pooo15lqI4hJ1GDPIgdYUIQTkIyjR1hQhBOQjKNJVxBNXvqsqxSA0GElE-vA-2JjbOrqSrwCzeW7tgsPIz&_nc_ohc=Bogjp0v1hesQ7kNvgGtqtO9&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AzCjZQlQeqKXk4TCmQ6hRDR&oh=00_AYC5SY8c1wAWNxtmbPyN0ng6Q_pofj1PAdnHMYh4IjT6IQ&oe=675432AB",
    "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t51.75761-15/464826219_17990016992707896_9105478172934284488_n.jpg?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEC8hDPas44IU1KC8wTv_EBhNUcD6IpPBaE1RwPoik8FlrGJ9iSt5bbpOfBZIoggfWjzz_HtGkVNe1Pnxoc6DND&_nc_ohc=PmVYVtpTcRkQ7kNvgG0V3QI&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Ags_zWguNeadrpNpXc2q-iV&oh=00_AYCiQUEZaYC7qEHigen3EI5haabcfJ0fvH80rxP6FCdpDg&oe=67542EAA",
  ];

  function Promociones() {
    return (
      <div className="flex flex-col bg-[#f7e6ec] w-full">
        <SeparadorTop />
        <div className="flex flex-col px-6 sm:px-12 lg:px-24 py-8 bg-[#f7e6ec]">
          {/* Título */}
          <h2 className="font-tittle text-3xl sm:text-5xl lg:text-7xl text-[#de2d7a] py-2 text-center">
            Productos Destacados
          </h2>
          {/* Enlace */}
          <Link
            className="text-lg sm:text-2xl text-[#510623] text-center mt-4"
            to="/carta-productos"
          >
            –{'>'} ¡Descubre todos los sabores! {'<'}–
          </Link>
          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
            {iceCreamPromos.map((imageUrl, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={imageUrl}
                  alt={`Ice cream promo ${index + 1}`}
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <SeparadorButtom />
      </div>
    );
  }
  


export default Promociones;