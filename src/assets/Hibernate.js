import * as React from "react";
const SvgHibernate = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.365 0 9.98 7.994h8.95L14.31 0H5.366zm-.431.248L.46 7.994l4.613 8.008L9.55 8.24 4.934.248zm13.992 7.75-4.475 7.76 4.617 7.992 4.471-7.744-4.613-8.008zm-4.905 8.006-8.95.002L9.688 24h8.946l-4.615-7.994.001-.002z" />
  </svg>
);
export default SvgHibernate;
