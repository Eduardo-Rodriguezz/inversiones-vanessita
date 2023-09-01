import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import ShoppingKart from "./components/Shoppingkart";
import Contact from "./components/Contact";
import Kart from "./components/Kart";
import GlobalProvider from "./context/GlobalContext";
import Footer from "./components/Footer";
import "./styles/app-style.css";
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {
  return (
    <div className="app-container container">
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/shoppingkart" element={<ShoppingKart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kart" element={<Kart />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
