import React from "react";

import "./Phonetic.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-4">
          <p>{props.phonetic.text}</p>
        </div>
        <div className="col-4">
          <audio controls src={props.phonetic.audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      </div>
    </div>
  );
}
