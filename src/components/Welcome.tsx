import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E7] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Benvinguts/des!</h1>
        <div className="space-y-4 text-lg text-gray-600 mb-8">
          <p>
            Aquesta aplicació us ajudarà a calcular el pressupost del vostre projecte digital de manera ràpida i senzilla.
          </p>
          <p>
            Podreu seleccionar diferents serveis i personalitzar les opcions segons les vostres necessitats.
          </p>
          <p>
            Per començar, només heu de seleccionar els serveis que necessiteu i ajustar les opcions disponibles.
          </p>
        </div>
        <Link
          to = "/calculator"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Començar a calcular
        </Link>
      </div>
    </div>
  );
};

export default Welcome;