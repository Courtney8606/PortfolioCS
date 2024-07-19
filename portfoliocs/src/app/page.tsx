import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import Footer from "./components/layout/Footer";
import "./globals.css";
import BurgerMenu from "./components/menu/BurgerMenu";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";

export default function Home() {
  return (
    <GlobalStateProvider>
      <Navbar />
      <BurgerMenu />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </GlobalStateProvider>
  );
}
