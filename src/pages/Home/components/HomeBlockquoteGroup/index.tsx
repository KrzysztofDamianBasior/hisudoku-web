import React from "react";
import "./index.scss";

type Props = {};

const HomeBlockquoteGroup = (props: Props) => {
  return (
    <div className="blockquote-wrapper">
      <blockquote className="blockquote">
        <h1>
          Intuitive design happens when{" "}
          <span style={{ color: "#ffffff" }}>current knowledge</span> is the
          same as the{" "}
          <span style={{ color: "#ffffff" }}>target knowledge.</span>
        </h1>
        <h4>
          &mdash;Jared Spool
          {/* <br /> */}
          <em>Web Site Usability: A Designer's Guide</em>
        </h4>
      </blockquote>
    </div>
  );
};

export default HomeBlockquoteGroup;
