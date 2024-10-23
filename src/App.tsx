import React, { useState } from 'react';
import PriceList, { services } from './components/PriceList';
import Header from './components/Header';

function App() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [webPages, setWebPages] = useState(1);
  const [webLanguages, setWebLanguages] = useState(1);

  const handleServiceChange = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleWebCustomizationChange = (pages: number, languages: number) => {
    setWebPages(pages);
    setWebLanguages(languages);
  };

  const calculateWebCost = () => {
    const basePrice = services.find(service => service.id === 'Web')?.price || 0;
    const additionalCost = (webPages + webLanguages) * 30;
    return basePrice + additionalCost;
  };

  const totalPrice = selectedServices.reduce((total, serviceId) => {
    const service = services.find(service => service.id === serviceId);
    if (service?.id === 'Web') {
      return total + calculateWebCost();
    }
    return total + (service ? service.price : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-[#FFF8E7] flex flex-col items-center justify-center p-4">
      <Header />
        <PriceList
          selectedServices = {selectedServices}
          onServiceChange = {handleServiceChange}
          webPages = {webPages}
          webLanguages = {webLanguages}
          onWebCustomizationChange = {handleWebCustomizationChange}
        />
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-2xl font-bold text-gray-800 flex justify-between items-center">
            Preu pressuposat: 
            <span className="text-4xl">{totalPrice} €</span>
          </p>
        </div>
      </div>
  );
}

export default App;