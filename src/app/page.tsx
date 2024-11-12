import Image from "next/image";
import Assignments from "./components/assignments";
import About from "./components/about";
import ContactUs from "./components/Contactus";
import Education from "./components/education";
import Hero from "./components/hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Assignments />
      <ContactUs />
    </div>
  );
}
