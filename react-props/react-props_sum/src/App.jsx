import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}

export default function App() {
  return <Sum valueA={32} valueB={153} />;
}
