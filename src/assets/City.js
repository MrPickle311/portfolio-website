import * as React from "react";
const SvgCity = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M469.289 48.943H361.93c-5.632 0-10.199 4.566-10.199 10.199v187.747h-69.976V10.199C281.755 4.566 277.188 0 271.556 0h-61.352c-5.632 0-10.199 4.566-10.199 10.199v143.154h-22.538V96.892c0-5.633-4.567-10.199-10.199-10.199s-10.199 4.566-10.199 10.199v56.461h-11.034c-5.632 0-10.199 4.566-10.199 10.199v49.619H83.634v-37.745c0-5.633-4.567-10.199-10.199-10.199s-10.199 4.566-10.199 10.199v37.746H42.711c-5.632 0-10.199 4.566-10.199 10.199V501.8c0 5.633 4.567 10.199 10.199 10.199h426.578c5.632 0 10.199-4.566 10.199-10.199V59.142c0-5.633-4.567-10.199-10.199-10.199zM135.835 491.602H52.91V233.571h82.925v258.031zm125.522 0H156.233v-317.85h105.123v317.85zm0-338.249h-40.954V20.398h40.954v132.955zm90.366 338.249h-69.968V267.286h69.968v224.316zm107.367 0h-86.96V69.341h86.96v422.261z" />
    <path d="M186.276 199.033c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.566 10.199 10.199 10.199 5.632 0 10.199-4.566 10.199-10.199v-13.542c0-5.632-4.567-10.199-10.199-10.199zM229.781 199.033c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.632-4.567-10.199-10.199-10.199zM240.656 105.499c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c.001-5.633-4.566-10.199-10.199-10.199zM240.656 52.206c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199V62.405c.001-5.633-4.566-10.199-10.199-10.199zM186.276 258.412c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.566 10.199 10.199 10.199 5.632 0 10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.199-10.199-10.199zM229.781 258.412c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.199-10.199-10.199zM186.276 313.622c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.566 10.199 10.199 10.199 5.632 0 10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.2-10.199-10.2zM229.781 313.622c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.2-10.199-10.2zM186.276 373.001c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.566 10.199 10.199 10.199 5.632 0 10.199-4.566 10.199-10.199V383.2c0-5.633-4.567-10.199-10.199-10.199zM229.781 373.001c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199V383.2c0-5.633-4.567-10.199-10.199-10.199zM186.276 432.379c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.566 10.199 10.199 10.199 5.632 0 10.199-4.566 10.199-10.199v-13.542c0-5.634-4.567-10.2-10.199-10.2zM229.781 432.379c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.634-4.567-10.2-10.199-10.2zM398.361 199.033c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.632-4.567-10.199-10.199-10.199zM436.427 199.033c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.632-4.567-10.199-10.199-10.199zM398.361 258.412c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.199-10.199-10.199zM436.427 258.412c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.199-10.199-10.199zM398.361 313.622c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.2-10.199-10.2zM436.427 313.622c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.2-10.199-10.2zM398.361 85.688c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199V95.887c0-5.633-4.567-10.199-10.199-10.199zM436.427 85.688c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199V95.887c0-5.633-4.567-10.199-10.199-10.199zM398.361 140.899c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.199-10.199-10.199zM436.427 140.899c-5.632 0-10.199 4.566-10.199 10.199v13.542c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.633-4.567-10.199-10.199-10.199zM398.361 373.001c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199V383.2c0-5.633-4.567-10.199-10.199-10.199zM436.427 373.001c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199V383.2c0-5.633-4.567-10.199-10.199-10.199zM398.361 432.379c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.634-4.567-10.2-10.199-10.2zM436.427 432.379c-5.632 0-10.199 4.566-10.199 10.199v13.543c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199v-13.542c0-5.634-4.567-10.2-10.199-10.2zM113.405 253.414H76.428c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h36.978c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.2-10.199zM113.405 292.928H76.428c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h36.978c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.2-10.199zM113.405 333.718H76.428c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h36.978c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.2-10.199zM113.405 373.232H76.428c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h36.978c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.2-10.199zM113.405 414.021H76.428c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h36.978c5.632 0 10.199-4.566 10.199-10.199 0-5.632-4.567-10.199-10.2-10.199zM113.405 453.535H76.428c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h36.978c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.2-10.199zM328.753 281.692H302.65c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h26.103c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199zM328.753 329.547H302.65c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h26.103c5.632 0 10.199-4.566 10.199-10.199 0-5.632-4.567-10.199-10.199-10.199zM328.753 378.489H302.65c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h26.103c5.632 0 10.199-4.566 10.199-10.199 0-5.632-4.567-10.199-10.199-10.199zM328.753 428.52H302.65c-5.632 0-10.199 4.566-10.199 10.199s4.567 10.199 10.199 10.199h26.103c5.632 0 10.199-4.566 10.199-10.199s-4.567-10.199-10.199-10.199zM167.267 43.857c-5.632 0-10.199 4.566-10.199 10.199v12.239c0 5.633 4.567 10.199 10.199 10.199s10.199-4.566 10.199-10.199V54.056c0-5.633-4.567-10.199-10.199-10.199z" />
  </svg>
);
export default SvgCity;