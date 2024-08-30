import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./Destination.css";
import Destinationdata from "./Destinationdata";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame.</p>

      <Destinationdata
        className="first-des"
        heading="Taal Volcano,Batangas"
        text="Taal Volcano, located in Batangas, Philippines, is a picturesque yet
       active volcano renowned for its dramatic setting within Taal Lake.
       This striking volcano is unique in that it sits on an island within
       a lake, which itself is on an island, creating a stunning
       multi-layered landscape. Taal is known for its frequent volcanic
       activity and its picturesque crater lake, making it a popular
       destination for both tourists and scientists. The surrounding area
       offers spectacular views and is a key part of the local ecosystem,
       contributing to the rich natural beauty and geological interest of
       the region."
        img1={Mountain1}
        img2={Mountain2}
      />

      <Destinationdata
        className="first-des-reverse"
        heading="Mt. Daguldol,Batangas"
        text="Mt. Daguldol is a popular hiking destination located in the province of Batangas, Philippines. Situated in the coastal town of San Juan, Mt. Daguldol offers a relatively easy to moderate trail, making it suitable for beginners and seasoned hikers alike. The trek to the summit takes you through lush forests, rocky paths, and scenic coastal views. Along the way, hikers can enjoy the fresh sea breeze and the beautiful landscapes of the surrounding areas, including the chance to pass by some local communities."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
