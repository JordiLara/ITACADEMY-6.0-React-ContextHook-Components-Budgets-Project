import React from 'react';

interface WebCustomizationProps {
  pages: number;
  languages: number;
  onChange: (pages: number, languages: number) => void;
}

const WebCustomization: React.FC<WebCustomizationProps> = ({ pages, languages, onChange }) => {
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de pàguines
          </label>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de llenguatges
          </label>
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
    </div>
  );
};

export default WebCustomization;