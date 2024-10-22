import React from 'react';

interface WebCustomizationProps {
  pages: number;
  languages: number;
  onChange: (pages: number, languages: number) => void;
}

const WebCustomization: React.FC<WebCustomizationProps> = ({ pages, languages, onChange }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      
      <div className="flex space-x-4">
        <div>
          <label htmlFor = "pages" className="block text-sm font-medium text-gray-700">
            Nombre de pàguines
          </label>
          <input
            type = "number"
            id = "pages"
            value = {pages}
            onChange = {(event) => onChange(parseInt(event.target.value), languages)}
            min = "1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor = "languages" className="block text-sm font-medium text-gray-700">
            Nombre de llenguatges
          </label>
          <input
            type = "number"
            id = "languages"
            value = {languages}
            onChange = {(event) => onChange(pages, parseInt(event.target.value))}
            min = "1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default WebCustomization;