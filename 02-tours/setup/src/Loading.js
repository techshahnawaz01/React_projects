import React, { useState, useEffect } from "react";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 4 ? prevDots + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading">
      <h1>loading{dots}</h1>
    </div>
  );
};

export default Loading;
