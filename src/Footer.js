import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <small className="Footer">
      <a
        href="https://github.com/mgd2347/react-project"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      <span> by </span>
      <a href="https://twitter.com/maggie_fz" target="_blank" rel="noreferrer">
        Maggie F.
      </a>
    </small>
  );
}
