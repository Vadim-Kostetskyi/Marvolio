import React from "react";

const Resize = ({ className }: { className?: string }): JSX.Element => (
  <svg className={className} viewBox="0 0 32 32">
    <path d="M6.736 21.264c0.249 0.249 0.574 0.373 0.9 0.373s0.651-0.124 0.9-0.373c0.497-0.497 0.497-1.303 0-1.8l-4.191-4.191h19.309l-4.191 4.191c-0.497 0.497-0.497 1.303 0 1.8 0.248 0.248 0.574 0.373 0.9 0.373s0.651-0.124 0.9-0.373l6.364-6.364c0.497-0.497 0.497-1.303 0-1.8l-6.364-6.364c-0.497-0.497-1.303-0.497-1.8 0s-0.497 1.303 0 1.8l4.191 4.191h-19.309l4.191-4.191c0.497-0.497 0.497-1.303 0-1.8s-1.303-0.497-1.8 0l-6.364 6.364c-0.497 0.497-0.497 1.303 0 1.8l6.364 6.364z"></path>
  </svg>
);

export default Resize;
