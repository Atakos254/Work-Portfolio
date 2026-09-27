import React from 'react';

export const EngineeringLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Precision Engineering Hexagonal Frame */}
      <path
        d="M12 2.2L20.8 7.3V16.7L12 21.8L3.2 16.7V7.3L12 2.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Internal Grid / Busbar Nodes */}
      <path
        d="M12 2.2V6.5M20.8 16.7L17 14.5M3.2 16.7L7 14.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Center Innovation Energy Vector */}
      <path
        d="M13.2 6.8L8 13.2H12.2L10.8 17.2L16 10.8H11.8L13.2 6.8Z"
        fill="currentColor"
      />
    </svg>
  );
};
