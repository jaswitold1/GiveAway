import React from "react";

export default function ThreeCols({ number, title, description }) {
  return (
    <div>
      <h1>{number}</h1>
      <p>{title}</p>
      <span>{description}</span>
    </div>
  );
}
