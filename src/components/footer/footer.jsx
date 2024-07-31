import React from 'react';

export function Footer({ text }) {
  return (
    <div 
      className='px-3  py-1 text-white d-flex justify-content-center align-items-center'
      style={{ 
        backgroundColor: 'rgba(20, 184, 184, 0.8)', // Cor de fundo com 80% de opacidade
      }}
    >
      <p className='mb-0 bg-transparent'>{text}</p> {/* Remove a margem inferior padrão do <p> */}
    </div>
  );
}
