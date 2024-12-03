import React from 'react'

const menuHelados = [
    {
        sabor: "Vainilla",
        precio: 2.5,
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/462707989_1052486876568594_8581944203466901937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErU0vKe0fkse1Br2N-hqHHJI5vE7Ww664kjm8TtbDrrpjSscuhSpRk-iU-uO8HD45bOwkM2TqdSw5J1D3FqjOz&_nc_ohc=d_cIJ6-ejawQ7kNvgEH7JnO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AjfTCDft1-9Xd3Y4Wst8Eqp&oh=00_AYD-2QxQYHy6ec73LYBrP4MPGDCvhZrm81yOdnbchyOd1g&oe=675525FA"
    },
    {
        sabor: "Chocolate",
        precio: 3.0,
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/462707989_1052486876568594_8581944203466901937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErU0vKe0fkse1Br2N-hqHHJI5vE7Ww664kjm8TtbDrrpjSscuhSpRk-iU-uO8HD45bOwkM2TqdSw5J1D3FqjOz&_nc_ohc=d_cIJ6-ejawQ7kNvgEH7JnO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AjfTCDft1-9Xd3Y4Wst8Eqp&oh=00_AYD-2QxQYHy6ec73LYBrP4MPGDCvhZrm81yOdnbchyOd1g&oe=675525FA"
    },
    {
        sabor: "Fresa",
        precio: 2.8,
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/462707989_1052486876568594_8581944203466901937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErU0vKe0fkse1Br2N-hqHHJI5vE7Ww664kjm8TtbDrrpjSscuhSpRk-iU-uO8HD45bOwkM2TqdSw5J1D3FqjOz&_nc_ohc=d_cIJ6-ejawQ7kNvgEH7JnO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AjfTCDft1-9Xd3Y4Wst8Eqp&oh=00_AYD-2QxQYHy6ec73LYBrP4MPGDCvhZrm81yOdnbchyOd1g&oe=675525FA"
    },
    {
        sabor: "Menta con chocolate",
        precio: 3.2,
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/462707989_1052486876568594_8581944203466901937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErU0vKe0fkse1Br2N-hqHHJI5vE7Ww664kjm8TtbDrrpjSscuhSpRk-iU-uO8HD45bOwkM2TqdSw5J1D3FqjOz&_nc_ohc=d_cIJ6-ejawQ7kNvgEH7JnO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AjfTCDft1-9Xd3Y4Wst8Eqp&oh=00_AYD-2QxQYHy6ec73LYBrP4MPGDCvhZrm81yOdnbchyOd1g&oe=675525FA"
    },
    {
        sabor: "Cookies and Cream",
        precio: 3.5,
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/462707989_1052486876568594_8581944203466901937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErU0vKe0fkse1Br2N-hqHHJI5vE7Ww664kjm8TtbDrrpjSscuhSpRk-iU-uO8HD45bOwkM2TqdSw5J1D3FqjOz&_nc_ohc=d_cIJ6-ejawQ7kNvgEH7JnO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AjfTCDft1-9Xd3Y4Wst8Eqp&oh=00_AYD-2QxQYHy6ec73LYBrP4MPGDCvhZrm81yOdnbchyOd1g&oe=675525FA"
    },
    {
        sabor: "Coco",
        precio: 2.7,
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/462707989_1052486876568594_8581944203466901937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErU0vKe0fkse1Br2N-hqHHJI5vE7Ww664kjm8TtbDrrpjSscuhSpRk-iU-uO8HD45bOwkM2TqdSw5J1D3FqjOz&_nc_ohc=d_cIJ6-ejawQ7kNvgEH7JnO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AjfTCDft1-9Xd3Y4Wst8Eqp&oh=00_AYD-2QxQYHy6ec73LYBrP4MPGDCvhZrm81yOdnbchyOd1g&oe=675525FA"
    },
    {
        sabor: "Stracciatella",
        precio: 3.0,
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/462707989_1052486876568594_8581944203466901937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErU0vKe0fkse1Br2N-hqHHJI5vE7Ww664kjm8TtbDrrpjSscuhSpRk-iU-uO8HD45bOwkM2TqdSw5J1D3FqjOz&_nc_ohc=d_cIJ6-ejawQ7kNvgEH7JnO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AjfTCDft1-9Xd3Y4Wst8Eqp&oh=00_AYD-2QxQYHy6ec73LYBrP4MPGDCvhZrm81yOdnbchyOd1g&oe=675525FA"
    },
    {
        sabor: "Mango",
        precio: 3.3,
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/462707989_1052486876568594_8581944203466901937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErU0vKe0fkse1Br2N-hqHHJI5vE7Ww664kjm8TtbDrrpjSscuhSpRk-iU-uO8HD45bOwkM2TqdSw5J1D3FqjOz&_nc_ohc=d_cIJ6-ejawQ7kNvgEH7JnO&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=AjfTCDft1-9Xd3Y4Wst8Eqp&oh=00_AYD-2QxQYHy6ec73LYBrP4MPGDCvhZrm81yOdnbchyOd1g&oe=675525FA"
    }
];


function Helados() {
    return (
        <div className='my-12'>
            <div className='text-[#633415] font-semibold text-xl mb-10'>
                <p>Conoce la Carta de CocoBlú y descubre nuestros Helados Artesanales, Crema, Soft.</p>
                <p>Disfruta de la variedad de productos y sabores que tenemos para ti.</p>
            </div>
            <div className='grid grid-cols-4 gap-12 mx-40'>
                {menuHelados.map((helados, index) => (
                    <div
                        key={index}
                        className='bg-white shadow-lg rounded-lg overflow-hidden h-auto flex items-center flex-col'>
                        <img src={helados.img} alt="" className='h-full w-full object-cover' />
                        <div className='p-5 flex flex-col items-start w-full justify-center'>
                            <h3 className='text-xl'> Helado de {helados.sabor}</h3>
                            <p className='font-bold text-lg text-[#633415]'> ${helados.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Helados