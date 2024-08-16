import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <div className="title container " style={{ backgroundColor: "#dcf5ff" }}>
        <h3>Dummy paragraph generater</h3>
        <div className="underline"></div>

        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs :</label>
          <input
            min="0"
            max="8"
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">generate</button>
        </form>
      </div>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p key={index} className="container">
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
