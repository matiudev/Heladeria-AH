import React from 'react'
import SeparadorButtom from '../../../components/Separadores/SeparadorButtom'
function TituloCarta() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://i.pinimg.com/originals/89/cc/a4/89cca42a47b1a5be263b21a33ca10b6c.jpg"
          alt="Imagen de carta"
          className="h-96 w-full object-cover"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ffffff] text-8xl font-bold">
          Nuestra Carta
        </h2>
        <div className="absolute w-full top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-7">
        <SeparadorButtom/>
        </div>
      </div>
    </div>

  )
};

export default TituloCarta;
