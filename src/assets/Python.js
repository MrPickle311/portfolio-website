import * as React from "react";
const SvgPython = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13 3a4 4 0 0 0-4 4v1h5a1 1 0 0 1 0 2H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h1v-5c0-1.654 1.346-3 3-3h8a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4h-3zm-1 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 3v5c0 1.654-1.346 3-3 3h-8a1 1 0 0 0-1 1v6a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-1h-5a1 1 0 0 1 0-2h7a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4h-1zm-4 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
);
export default SvgPython;
