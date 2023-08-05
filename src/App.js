import React from "react";
import './assets/styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";






function App() {
  return (
    <>
      {/*----------------------------- Browser Router Section ----------------------*/}
      <BrowserRouter>
        <div className="App">
      
          {/*----------------------------- Header Section ----------------------*/}
          <div className='header'>
            <HeaderComponent />
            {/*----------------------------- Toaster Section ----------------------*/}
            {/* <Toaster position="top-right1"></Toaster> */}
          </div>
          {/*----------------------------- Main Contant ----------------------*/}
          <div className="main-content">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/menu' element={<MenuPage />} />
              <Route path='/services' element={<ServicesPage />} />
              <Route path='/about' element={<AboutUsPage />} />
              <Route path='/contact' element={<ContactUsPage />} />
            </Routes>
          </div>
       {/* //-----------------FOOTER---------------------------/// */}
          <div className="footer-components">
                <FooterComponent></FooterComponent>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
