import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import questions from "./data";
function App() {
  const [Question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers About login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
