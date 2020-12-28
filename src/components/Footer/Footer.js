import Boton from "../common/Boton";
import { ReactComponent as Wave } from "../../assets/desktop/bg-pattern-wave-red.svg";
const Footer = () => {
  return (
    <footer>
      <Wave className="wave" />
      <h2>Let's build something great together.</h2>
      <Boton
        className="btn-red"
        content="Schedule a Call"
        href="https://wa.link/xry6dz"
      />
    </footer>
  );
};

export default Footer;
