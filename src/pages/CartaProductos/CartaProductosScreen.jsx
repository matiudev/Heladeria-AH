import React from 'react'
import TituloCarta from './components/TituloCarta'
import Helados from './components/Helados';
import Donas from './components/Donas';

 function CartaProductosScreen() {
  return (
    <div>
        <TituloCarta/>
        <Helados/>
        <Donas/>
    </div>
  )
}

export default CartaProductosScreen;
