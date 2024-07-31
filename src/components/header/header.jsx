import React from 'react';

export function Header({ title }) {
  return (
    <div 
      className="header text-white d-flex align-items-center justify-content-center"
      style={{ backgroundColor: '#14b8b8' }}
    >
      <h1 className="fs-4 bg-transparent m-2">{title}</h1>
    </div>
  );
}
