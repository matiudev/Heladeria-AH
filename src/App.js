import React, {useLayoutEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";

// Pages
import CartaProductosScreen from "./pages/CartaProductos/CartaProductosScreen";
import QuienesSomosScreen from "./pages/QuienesSomos/QuienesSomosScreen";


// Components
import Header from "./components/Header";
import CarruselFotos from "./components/CarruselFotos";
import Promociones from "./components/Promociones";
import QuienesSomos from "./components/QuienesSomos";
import RRSS from "./components/RRSS";
import Footer from "./components/Footer";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CarruselFotos />
                  <QuienesSomos />
                  <Promociones />
                  <RRSS />
                </>
              }
            />
            <Route path="/carta-productos" element={<CartaProductosScreen />} />
            <Route path="/quienes-somos" element={<QuienesSomosScreen />} />
          </Routes>
          <Footer />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
