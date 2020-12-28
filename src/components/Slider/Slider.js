import { useState } from "react";
import { ReactComponent as Right } from "../../assets/desktop/icon-arrow-next.svg";
import { ReactComponent as Left } from "../../assets/desktop/icon-arrow-previous.svg";
import { ReactComponent as Wavy } from "../../assets/desktop/bg-pattern-wavy-white.svg";
const Slider = () => {
  const [slide, setSlide] = useState(1);
  const handleRight = () => {
    if (slide === 3) {
      setSlide(1);
    } else {
      setSlide(slide + 1);
    }
  };
  const handleLeft = () => {
    if (slide === 1) {
      setSlide(3);
    } else {
      setSlide(slide - 1);
    }
  };
  return (
    <section className="slider">
      <div className="slider__name">
        <h2>
          Brand
          {slide === 1
            ? " naming & guidelines"
            : slide === 2
            ? " identity & merchandise"
            : " identity & web design"}
        </h2>
        <div className="controles">
          <Left onClick={handleLeft} />
          <Right onClick={handleRight} />
        </div>
        <Wavy className="wavy" />
      </div>

      <div className={`slider__content slider${slide} animacion`}>
        <div className="info">
          {slide === 1 ? (
            <>
              <p>Lean Product Roadmap</p>
              <p>2019 Project</p>
            </>
          ) : slide === 2 ? (
            <>
              <p>New Majestic Hotel</p>
              <p>2018 Project</p>
            </>
          ) : (
            <>
              <p>Crypto Dashboard</p>
              <p>2016 Project</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Slider;
