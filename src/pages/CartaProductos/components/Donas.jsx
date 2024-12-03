import React from 'react'

const menuDonas = [
    {
        sabor: "Glaseada Clásica",
        precio: 2.5, 
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/461074964_1041044784379470_3218826906430652871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdThWOWDs8-ZgwSOI7C1H9NA_P0icKvAQ0D8_SJwq8BG8yG9DCfIoU81Ys4z5CqoTpIRv-h6q_lMUG6-_2-IVj&_nc_ohc=kHhqJOPRQJ8Q7kNvgHDADZF&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Alvef9x2RA9FMEcM9lu7aUk&oh=00_AYCM5zo_l3hbDYf8uMGezPu7Mg9iaIc-WH026vXKziM7-g&oe=675535AB",
    },
    { 
        sabor: "Oreo", 
        precio: 3.0, 
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/461074964_1041044784379470_3218826906430652871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdThWOWDs8-ZgwSOI7C1H9NA_P0icKvAQ0D8_SJwq8BG8yG9DCfIoU81Ys4z5CqoTpIRv-h6q_lMUG6-_2-IVj&_nc_ohc=kHhqJOPRQJ8Q7kNvgHDADZF&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Alvef9x2RA9FMEcM9lu7aUk&oh=00_AYCM5zo_l3hbDYf8uMGezPu7Mg9iaIc-WH026vXKziM7-g&oe=675535AB",
    },
    { 
        sabor: "Fresa", 
        precio: 2.8, 
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/461074964_1041044784379470_3218826906430652871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdThWOWDs8-ZgwSOI7C1H9NA_P0icKvAQ0D8_SJwq8BG8yG9DCfIoU81Ys4z5CqoTpIRv-h6q_lMUG6-_2-IVj&_nc_ohc=kHhqJOPRQJ8Q7kNvgHDADZF&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Alvef9x2RA9FMEcM9lu7aUk&oh=00_AYCM5zo_l3hbDYf8uMGezPu7Mg9iaIc-WH026vXKziM7-g&oe=675535AB",
    },
    { 
        sabor: "Menta con Chocolate", 
        precio: 3.2, 
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/461074964_1041044784379470_3218826906430652871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdThWOWDs8-ZgwSOI7C1H9NA_P0icKvAQ0D8_SJwq8BG8yG9DCfIoU81Ys4z5CqoTpIRv-h6q_lMUG6-_2-IVj&_nc_ohc=kHhqJOPRQJ8Q7kNvgHDADZF&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Alvef9x2RA9FMEcM9lu7aUk&oh=00_AYCM5zo_l3hbDYf8uMGezPu7Mg9iaIc-WH026vXKziM7-g&oe=675535AB",
    },
    { 
        sabor: "Cookies and Cream", 
        precio: 3.5, 
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/461074964_1041044784379470_3218826906430652871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdThWOWDs8-ZgwSOI7C1H9NA_P0icKvAQ0D8_SJwq8BG8yG9DCfIoU81Ys4z5CqoTpIRv-h6q_lMUG6-_2-IVj&_nc_ohc=kHhqJOPRQJ8Q7kNvgHDADZF&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Alvef9x2RA9FMEcM9lu7aUk&oh=00_AYCM5zo_l3hbDYf8uMGezPu7Mg9iaIc-WH026vXKziM7-g&oe=675535AB", 
    },
    { 
        sabor: "Coco", 
        precio: 2.7, 
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/461074964_1041044784379470_3218826906430652871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdThWOWDs8-ZgwSOI7C1H9NA_P0icKvAQ0D8_SJwq8BG8yG9DCfIoU81Ys4z5CqoTpIRv-h6q_lMUG6-_2-IVj&_nc_ohc=kHhqJOPRQJ8Q7kNvgHDADZF&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Alvef9x2RA9FMEcM9lu7aUk&oh=00_AYCM5zo_l3hbDYf8uMGezPu7Mg9iaIc-WH026vXKziM7-g&oe=675535AB",
    },
    { 
        sabor: "Stracciatella", 
        precio: 3.0, 
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/461074964_1041044784379470_3218826906430652871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdThWOWDs8-ZgwSOI7C1H9NA_P0icKvAQ0D8_SJwq8BG8yG9DCfIoU81Ys4z5CqoTpIRv-h6q_lMUG6-_2-IVj&_nc_ohc=kHhqJOPRQJ8Q7kNvgHDADZF&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Alvef9x2RA9FMEcM9lu7aUk&oh=00_AYCM5zo_l3hbDYf8uMGezPu7Mg9iaIc-WH026vXKziM7-g&oe=675535AB", 
    },
    { 
        sabor: "Mango", 
        precio: 3.3, 
        img: "https://z-p3-scontent.fiqq2-1.fna.fbcdn.net/v/t39.30808-6/461074964_1041044784379470_3218826906430652871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdThWOWDs8-ZgwSOI7C1H9NA_P0icKvAQ0D8_SJwq8BG8yG9DCfIoU81Ys4z5CqoTpIRv-h6q_lMUG6-_2-IVj&_nc_ohc=kHhqJOPRQJ8Q7kNvgHDADZF&_nc_zt=23&_nc_ht=z-p3-scontent.fiqq2-1.fna&_nc_gid=Alvef9x2RA9FMEcM9lu7aUk&oh=00_AYCM5zo_l3hbDYf8uMGezPu7Mg9iaIc-WH026vXKziM7-g&oe=675535AB",
    },
];



function Donas() {
    return (
        <div className='my-12'>
            <div className='text-[#de2d7a] font-semibold text-5xl mt-24 mb-11'>
                <p>Donas</p>
            </div>
            <div className='grid grid-cols-4 gap-12 mx-40'>
                {menuDonas.map((donas, index) => (
                    <div
                        key={index}
                        className='bg-white shadow-lg rounded-lg overflow-hidden h-auto flex items-center flex-col'>
                        <img src={donas.img} alt="" className='h-full w-full object-cover' />
                        <div className='p-5 flex flex-col items-start w-full justify-center'>
                            <h3 className='text-xl'> Dona de {donas.sabor}</h3>
                            <p className='font-bold text-lg text-[#633415]'> ${donas.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Donas;