import React from 'react';
import headerBackground from '../assets/headerBackground.png';
const Header: React.FC = () => {
  return (
    <header className="w-full max-w-3xl mb-12">
      <div 
        className="p-12 rounded-3xl bg-white shadow-md text-center bg-cover bg-center"
        style = {{ backgroundImage: `url(${headerBackground})` }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Aconsegueix la millor qualitat</h1>
      </div>
    </header>
  );
};

export default Header;