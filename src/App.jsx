import "./App.css";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";
import Publication from "./components/Publication";
import Archives from "./components/Archives";
import Talks from "./components/Talks";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Talks />
      <Publication />
      <Archives />
      <Footer />
    </>
  );
}

export default App;
