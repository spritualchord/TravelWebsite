import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Aboutimg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={Aboutimg} title="About" btnClass="hide" />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
