import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Aboutimg from "../assets/2.jpg";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={Aboutimg}
        title="Contact Us"
        btnClass="hide"
      />
      <Contactform />
      <Footer />
    </>
  );
}

export default Contact;
