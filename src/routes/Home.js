import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TravelPlanner from "../components/TravelPlanner";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero"
        heroImg="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg"
        title="Your Journey Your Story"
        text="Choose your Favourite Destination"
        butntext="Travel Plan"
        url="/"
        btnClass="show"
      />
      <TravelPlanner />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
