import React from "react";
import Footer from "./Components/Footer/footer";
import Header from './Components/header/header';

const Layout = ({ children }) => {
  return (
    <>
      <Header /> 
      {children}
      <Footer />
    </>
  );
};

export default Layout;
