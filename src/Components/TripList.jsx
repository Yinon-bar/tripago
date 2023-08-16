import { useState } from "react";
import useFetch from "../hooks/useFetch";
import "./TripList.css";

function TripList() {
    // const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState("http://localhost:3001/trips");
    const { data, isPending, error } = useFetch(url);
    console.log(data);

    return (
        <div className="trip-list">
            <h2>Trip list</h2>
            {isPending && <h3>Loding Trips...</h3>}
            {error && <h3>{error}</h3>}
            <ul>
                {data &&
                    data.map((trip) => (
                        <li key={trip.id}>
                            <h3>{trip.destination}</h3>
                            <p>{trip.price}$</p>
                        </li>
                    ))}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl(url + "?loc=europe")}>
                    European Trips
                </button>
                <button onClick={() => setUrl("http://localhost:3001/trips")}>
                    All Trips
                </button>
            </div>
        </div>
    );
}

export default TripList;
