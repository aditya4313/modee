// src/components/ImageCircle.js
import React from 'react';

const ImageCircle = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '220px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      width: '350px', 
      height: '350px',
      borderRadius: '50%', 
      overflow: 'hidden', 
      zIndex: -1, 
      backgroundColor: 'rgba(255, 0, 0, 0.1)', 
    }}>
      <img
        src="https://img.freepik.com/premium-photo/minded-smart-clever-little-girl-study-laptop-think-thoughts_274222-26660.jpg?w=2000" 
        alt="Circular Background"
        style={{
          width: '100%', 
          height: '100%',
          objectFit: 'cover', 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          opacity: 1, // Reduced opacity for a subtler effect
        }}
      />
    </div>
  );
};

export default ImageCircle;
