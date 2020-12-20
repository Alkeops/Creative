import Boton from "../common/Boton";

const Branding = () => {
  return (
    <section className="branding">
      <div className="branding__image"></div>
      <div className="branding__text">
        <h1>Branding & website design agency</h1>
        <p>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <Boton className="btn-red" content="Learn More" />
      </div>
    </section>
  );
};

export default Branding;