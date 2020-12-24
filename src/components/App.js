import Approach from "./Approach/Approach";
import Branding from "./Branding/Branding";
import Design from "./Design/Design";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Branding />
        <Design />
        <Approach />
      </main>
    </>
  );
}

export default App;
