import Boton from "../common/Boton";

const NavMenu = ({ className }) => {
  return (
    <nav className={className}>
      <a href="">About</a>
      <a href="">Service</a>
      <a href="">Projects</a>
      <Boton className="btn btn-red" content="Schedule a Call" />
    </nav>
  );
};

export default NavMenu;
