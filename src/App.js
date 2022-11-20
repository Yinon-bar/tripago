import { useEffect, useState } from "react";
import "./App.css";
import TripList from "./Components/TripList";

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3004/trips").then((resp) =>
      resp.json().then((data) => setTrips(data))
    );
  }, []);

  console.log(trips);

  return (
    <div className="App">
      <h1>Tripago</h1>
      <TripList />
    </div>
  );
}

export default App;
