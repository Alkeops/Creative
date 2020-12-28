import Boton from "../common/Boton";

const NavMenu = ({ className }) => {
  return (
    <nav className={className}>
      <a href="#about">About</a>
      <a href="#service">Service</a>
      <a href="#projects">Projects</a>
      <Boton
        className="btn btn-red"
        content="Schedule a Call"
        href="https://wa.link/xry6dz"
      />
    </nav>
  );
};

export default NavMenu;
