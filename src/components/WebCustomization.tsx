import React, { useState } from 'react';
import Modal from './Modal';

interface WebCustomizationProps {
  pages: number;
  languages: number;
  onChange: (pages: number, languages: number) => void;
}

const WebCustomization: React.FC<WebCustomizationProps> = ({ pages, languages, onChange }) => {
  const [showPagesModal, setShowPagesModal] = useState(false);
  const [showLanguagesModal, setShowLanguagesModal] = useState(false);

  const handleIncrement = (field: 'pages' | 'languages') => {
    if (field === 'pages') {
      onChange(pages + 1, languages);
    } else {
      onChange(pages, languages + 1);
    }
  };

  const handleDecrement = (field: 'pages' | 'languages') => {
    if (field === 'pages' && pages > 1) {
      onChange(pages - 1, languages);
    } else if (field === 'languages' && languages > 1) {
      onChange(pages, languages - 1);
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Nombre de pàgines
            </label>
            <button
              onClick={() => setShowPagesModal(true)}
              className="ml-2 text-gray-500 hover:text-gray-700"
              title="Més informació"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick = {() => handleDecrement('pages')}
              disabled = {pages <= 1}
              className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              -
            </button>
            <div className="flex-1 px-4 py-2 bg-white rounded-lg text-center font-semibold">
              {pages}
            </div>
            <button
              onClick = {() => handleIncrement('pages')}
              className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Nombre de llenguatges
            </label>
            <button
              onClick = {() => setShowLanguagesModal(true)}
              className="ml-2 text-gray-500 hover:text-gray-700"
              title = "Més informació"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick = {() => handleDecrement('languages')}
              disabled = {languages <= 1}
              className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              -
            </button>
            <div className="flex-1 px-4 py-2 bg-white rounded-lg text-center font-semibold">
              {languages}
            </div>
            <button
              onClick = {() => handleIncrement('languages')}
              className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen = {showPagesModal}
        onClose = {() => setShowPagesModal(false)}
        title = "Informació sobre el nombre de pàgines"
      >
        <div className="text-gray-600">
          <p className="mb-3">El nombre de pàgines es refereix a la quantitat de pàgines diferents que tindrà el teu lloc web.</p>
          <p className="mb-3">Per exemple:</p>
          <ul className="list-disc pl-5 mb-3">
            <li>Pàgina d'inici</li>
            <li>Pàgina "Sobre nosaltres"</li>
            <li>Pàgina de contacte</li>
            <li>Pàgina de productes/serveis</li>
          </ul>
          <p>Cada pàgina addicional incrementarà el cost del projecte en 30€.</p>
        </div>
      </Modal>

      <Modal
        isOpen = {showLanguagesModal}
        onClose = {() => setShowLanguagesModal(false)}
        title = "Informació sobre els llenguatges"
      >
        <div className="text-gray-600">
          <p className="mb-3">El nombre de llenguatges indica en quants idiomes diferents estarà disponible el teu lloc web.</p>
          <p className="mb-3">Per exemple:</p>
          <ul className="list-disc pl-5 mb-3">
            <li>Català</li>
            <li>Castellà</li>
            <li>Anglès</li>
          </ul>
          <p>Cada idioma addicional requereix traducció i adaptació del contingut, incrementant el cost del projecte en 30€.</p>
        </div>
      </Modal>
    </div>
  );
};

export default WebCustomization;