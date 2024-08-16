import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("skyblue").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3 style={{ color: `${color}` }}>COLOR GENERATER</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#87ceeb"
            name="color"
            id="color"
            className={`${error ? "error" : null}`}
          />
          <button
            className="btn"
            type="submit"
            style={{ background: `${color}` }}
          >
            Generate
          </button>
        </form>
      </section>
      <div className="underline" style={{ background: `${color}` }}></div>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
