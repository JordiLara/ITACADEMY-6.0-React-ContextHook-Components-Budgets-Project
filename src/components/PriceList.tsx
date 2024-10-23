import React from 'react';
import WebCustomization from './WebCustomization';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const services: Service[] = [
  { id: 'Seo', name: 'Seo', description: 'Fer una campanya SEO', price: 300 },
  { id: 'Ads', name: 'Ads', description: 'Fer una campanya de publicitat', price: 400 },
  { id: 'Web', name: 'Web', description: 'Fer una pàgina web', price: 500 },
];

interface PriceListProps {
  selectedServices: string[];
  onServiceChange: (serviceId: string) => void;
  webPages: number;
  webLanguages: number;
  onWebCustomizationChange: (pages: number, languages: number) => void;
}

const PriceList: React.FC<PriceListProps> = ({ selectedServices, onServiceChange, webPages, webLanguages, onWebCustomizationChange }) => {
  return (
    <div className="space-y-6">
      {services.map(service => (
        <div key = {service.id} className="bg-yellow-100 p-6 rounded-2xl shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-gray-800">{service.price} €</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked = {selectedServices.includes(service.id)}
                  onChange = {() => onServiceChange(service.id)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">Afegir</span>
              </label>
            </div>
          </div>
          {service.id === 'Web' && selectedServices.includes('Web') && (
            <WebCustomization
              pages = {webPages}
              languages = {webLanguages}
              onChange = {onWebCustomizationChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PriceList;