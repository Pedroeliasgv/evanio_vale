import "./App.css";

import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import About from "./components/site/About";
import Authority from "./components/site/Authority";
import Ministry from "./components/site/Ministry";
import Courses from "./components/site/Courses";
import Events from "./components/site/Events";
import Content from "./components/site/Content";
import Impact from "./components/site/Impact";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Authority />
        <Ministry />
        <Courses />
        <Events />
        <Content />
        <Impact />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;