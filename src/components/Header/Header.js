import { useState } from "react";
import logo from "../../assets/desktop/logo.svg";
import hamburguer from "../../assets/mobile/icon-hamburger.svg";
import times from "../../assets/mobile/icon-cross.svg";
import NavMenu from "./NavMenu";
const Header = () => {
  const [abierto, setAbierto] = useState(false);
  return (
    <header className="header">
      <img src={logo} alt="" />
      <NavMenu className={!abierto ? "nav" : "nav nav-active"} />
      <img
        className="boton"
        src={abierto ? times : hamburguer}
        alt="boton"
        onClick={() => setAbierto(!abierto)}
      />
    </header>
  );
};

export default Header;
