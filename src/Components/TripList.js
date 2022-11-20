import { useEffect, useState } from "react";
import "./TripList.css";

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3004/trips").then((resp) =>
      resp.json().then((data) => setTrips(data))
    );
  }, []);

  console.log(trips);
  return (
    <div className="trip-list">
      <h2>Trip list</h2>
      <ul>
        {trips.map((trip) => (
          <li key={Math.random()}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripList;
