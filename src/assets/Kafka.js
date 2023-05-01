import * as React from "react";
const SvgKafka = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M237.617 249.268c-18.59 0-35.257 8.236-46.67 21.203l-29.245-20.704c3.105-8.547 4.887-17.725 4.887-27.331 0-9.44-1.72-18.464-4.723-26.885l29.18-20.484c11.412 12.901 28.035 21.093 46.57 21.093 34.313 0 62.233-27.916 62.233-62.233 0-34.317-27.92-62.232-62.232-62.232-34.313 0-62.232 27.915-62.232 62.232 0 6.143.928 12.066 2.593 17.675l-29.2 20.495c-12.197-15.132-29.759-25.698-49.769-28.923v-35.19c28.19-5.922 49.43-30.968 49.43-60.895 0-34.317-27.92-62.232-62.232-62.232-34.313 0-62.232 27.915-62.232 62.232 0 29.526 20.69 54.264 48.315 60.607v35.648c-37.702 6.618-66.466 39.521-66.466 79.092 0 39.763 29.049 72.787 67.023 79.18v37.642c-27.908 6.134-48.872 31.023-48.872 60.75 0 34.317 27.92 62.232 62.232 62.232s62.232-27.915 62.232-62.232c0-29.727-20.964-54.616-48.872-60.75v-37.644a80.357 80.357 0 0 0 48.927-28.456l29.44 20.838c-1.634 5.56-2.55 11.424-2.55 17.504 0 34.317 27.92 62.232 62.233 62.232 34.312 0 62.232-27.915 62.232-62.232s-27.92-62.232-62.232-62.232zm0-145.514c16.639 0 30.172 13.54 30.172 30.173 0 16.635-13.533 30.172-30.172 30.172-16.639 0-30.172-13.537-30.172-30.172 0-16.634 13.533-30.173 30.172-30.173zM56.034 47.09c0-16.634 13.534-30.172 30.173-30.172 16.639 0 30.172 13.538 30.172 30.172s-13.533 30.172-30.172 30.172c-16.64 0-30.173-13.538-30.173-30.172zm60.345 352.92c0 16.633-13.533 30.171-30.172 30.171-16.64 0-30.173-13.538-30.173-30.172s13.534-30.172 30.173-30.172c16.639 0 30.172 13.538 30.172 30.172zM86.204 264.515c-23.206 0-42.084-18.875-42.084-42.08 0-23.206 18.878-42.085 42.084-42.085 23.205 0 42.084 18.879 42.084 42.085 0 23.205-18.879 42.08-42.084 42.08zm151.413 77.157c-16.639 0-30.172-13.539-30.172-30.173s13.533-30.172 30.172-30.172c16.639 0 30.172 13.538 30.172 30.172s-13.533 30.173-30.172 30.173z"
      style={{
        fill: "#DED9D9",
      }}
      transform="translate(5.61 1.015) scale(.06703)"
    />
  </svg>
);
export default SvgKafka;
