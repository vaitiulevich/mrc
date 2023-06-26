import React, { useEffect, useRef, useState } from "react";

import "./accordion.css";
import arrD from '../../assets/arr-down.svg'
import arrUp from '../../assets/arr-up.svg'

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{props.title}</p>
        <span style={{ marginLeft: "20px" }}>{active ? <img src={arrUp} alt="-"/> : <img src={arrD} alt="+"/>}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div className="block-content">{props.content}</div>
        {/* <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        /> */}
      </div>
    </div>
  );
}

export default Accordion;
