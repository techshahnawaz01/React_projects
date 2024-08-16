import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import data from "./data"; // Assuming this is the path to your data file

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  useEffect(() => {
    setLoading(true);
    setTours(data); // Directly set the imported data
    console.log(data);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No tour left</h2>
          <button className="btn" onClick={() => setTours(data)}>
            refresh
          </button>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  }
}

export default App;
