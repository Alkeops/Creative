import Approach from "./Approach/Approach";
import Branding from "./Branding/Branding";
import Design from "./Design/Design";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <main>
        <Branding />
        <Design />
        <Approach />
        <Slider />
      </main>
      <Footer />
    </>
  );
}

export default App;
