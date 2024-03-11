import {useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Introducao from "./Components/Introducao/Introducao";
import Epicteto from "./Components/Epicteto/Epicteto";
import Abaco from "./Components/Corpo/Abaco";
import Primeiragen from "./Components/Corpo/Primeiragen";
import Nossotime from "./Components/Nossotime/Nossotime";
import AppStore from "./Components/AppStore/AppStore";
import Rodape from "./Components/Rodape/Rodape";
import Eniac from "./Components/Corpo/Eniac";
import Segundagen from "./Components/Corpo/Segundagen";
import Ibm7030 from "./Components/Corpo/Ibm7030";
import Pdp8 from "./Components/Corpo/Pdp8";
import Terceiragen from "./Components/Corpo/Terceiragen";
import Ibm36091 from "./Components/Corpo/Ibm36091";
import Quartagen from "./Components/Corpo/Quartagen";
import Apples from "./Components/Corpo/Apples";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Introducao/>
      <Epicteto />
      <Abaco />
      <Primeiragen />
      <Eniac />
      <Segundagen />
      <Ibm7030 />
      <Pdp8 />
      <Terceiragen />
      <Ibm36091 />
      <Quartagen />
      <Apples />
      <Nossotime />
      <AppStore />
      <Rodape />
    </main>
  );
};

export default App;
