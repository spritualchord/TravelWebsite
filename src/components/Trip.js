import "./Trip.css";
import Tripdata from "./Tripdata";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique Destinations using google maps</p>
      <div className="tripcard">
        <Tripdata
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia is a vast and diverse country located in Southeast Asia, straddling the equator between the Indian and Pacific Oceans. It is the world's largest archipelago, consisting of more than 17,000 islands, with over 6,000 of them inhabited. "
        />

        <Tripdata
          image={Trip2}
          heading="Trip in Malaysia"
          text="Indonesia is a vast and diverse country located in Southeast Asia, straddling the equator between the Indian and Pacific Oceans. It is the world's largest archipelago, consisting of more than 17,000 islands, with over 6,000 of them inhabited. "
        />

        <Tripdata
          image={Trip3}
          heading="Trip in France"
          text="Indonesia is a vast and diverse country located in Southeast Asia, straddling the equator between the Indian and Pacific Oceans. It is the world's largest archipelago, consisting of more than 17,000 islands, with over 6,000 of them inhabited. "
        />
      </div>
    </div>
  );
}

export default Trip;
