import wave from "../../assets/desktop/bg-pattern-wave-red.svg";
import Boton from "../common/Boton";
const Design = () => {
  return (
    <section className="design">
      <div className="design__image">
        <img className="wave" src={wave} alt="wave" />
      </div>

      <div className="design__text">
        <h2>
          <span>Design</span> is strategic.
        </h2>
        <p>
          "A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients."
        </p>
        <Boton
          className="btn-line"
          content="Schelude a call"
          href="https://wa.link/xry6dz"
        />
      </div>
    </section>
  );
};
export default Design;
