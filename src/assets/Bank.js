import * as React from "react";
const SvgBank = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
    >
      <path
        d="M84.668 38.004v-6.27H90V20L45 3.034 0 20v11.734h5.332v6.27h4.818v30.892H5.332v6.271H0v11.8h90v-11.8h-5.332v-6.271H79.85V38.004h4.818zm-3-3H66.332v-3.27h15.336v3.27zM63.332 68.896v6.271h-7.664v-6.271H50.85V38.004h4.818v-6.27h7.664v6.27h4.818v30.892h-4.818zM26.668 38.004v-6.27h7.664v6.27h4.818v30.892h-4.818v6.271h-7.664v-6.271H21.85V38.004h4.818zM42.15 68.896V38.004h5.7v30.892h-5.7zm-4.818-33.892v-3.27h15.336v3.27H37.332zm0 36.892h15.336v3.271H37.332v-3.271zM3 22.075 45 6.24l42 15.835v6.659H3v-6.659zm5.332 9.659h15.336v3.27H8.332v-3.27zm4.818 6.27h5.7v30.892h-5.7V38.004zM8.332 71.896h15.336v3.271H8.332v-3.271zM87 83.966H3v-5.8h84v5.8zm-5.332-8.8H66.332v-3.271h15.336v3.271zm-4.818-6.27h-5.7V38.004h5.699v30.892z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "#DED9D9",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </g>
  </svg>
);
export default SvgBank;
