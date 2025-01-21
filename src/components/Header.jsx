import React from 'react';

const Header = ({ onNewVideo }) => {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Aluraflix</h1>
      <nav>
        <button style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}>Home</button>
        <button style={{ margin: '5px', padding: '10px', cursor: 'pointer' }} onClick={onNewVideo}>Nuevo Video</button>
      </nav>
    </header>
  );
};

export default Header;