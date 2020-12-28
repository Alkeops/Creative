import Boton from "../common/Boton";

const Branding = () => {
  return (
    <section className="branding" id="about">
      <div className="branding__image"></div>
      <div className="wrapper">
        <div className="branding__text">
          <h1>Branding & website design agency</h1>
          <p>
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
          <Boton
            className="btn-red"
            content="Learn More"
            href="https://wa.link/xry6dz"
          />
        </div>
      </div>
    </section>
  );
};

export default Branding;
