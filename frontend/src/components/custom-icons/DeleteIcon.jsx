import React from 'react';

const DeleteIcon = ({ width, height, fill }) => (
  <svg
    width={width ? width : 18}
    height={height ? height : 18}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.286 1.714v.572h4.571v1.143h-1.143v10.857c0 .947-.767 1.714-1.714 1.714H3a1.714 1.714 0 01-1.714-1.714V3.429H.143V2.286h4.571v-.572C4.714.768 5.482 0 6.43 0H7.57c.947 0 1.715.768 1.715 1.714zm-2.857-.571a.571.571 0 00-.572.571v.572h2.286v-.572a.571.571 0 00-.572-.571H6.43zm5.142 13.143a.571.571 0 01-.571.571H3a.571.571 0 01-.571-.571V3.429h9.142v10.857zM4.143 12.57V5.714h1.143v6.857H4.143zM7.57 5.714H6.43v6.857H7.57V5.714zm2.286 0H8.714v6.857h1.143V5.714z"
      fill={fill ? fill : '#0a2b5c'}
    />
  </svg>
);

export default DeleteIcon;
