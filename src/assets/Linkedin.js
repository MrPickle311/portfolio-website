import * as React from "react";
const SvgLinkedin = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5zM7 21H4V10h3v11zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5zm4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14v7zM5.868 2.002A2.73 2.73 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729 2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455zM5.833 6.46c-.115.01-.231.01-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46z" />
  </svg>
);
export default SvgLinkedin;
