import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        🔈
      </a>
      <span className="text">{props.phonetics.text}</span>
    </div>
  );
}
