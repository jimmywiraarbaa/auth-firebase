import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonDirect = ({ path, label }) => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleClick = () => {
    navigate(path); // Arahkan ke path yang diberikan
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {label}
    </button>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default ButtonDirect;
