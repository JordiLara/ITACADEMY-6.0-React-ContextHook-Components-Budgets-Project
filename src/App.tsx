import React, { useState } from 'react';
import PriceList, { services } from './components/PriceList';
import Header from './components/Header';

function App() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceChange = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const totalPrice = selectedServices.reduce((total, serviceId) => {
    const service = services.find(service => service.id === serviceId);
    return total + (service ? service.price : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-[#FFF8E7] flex flex-col items-center justify-center p-4">
      <Header />
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl">
        <PriceList
          selectedServices = {selectedServices}
          onServiceChange = {handleServiceChange}
        />
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-2xl font-bold text-gray-800 flex justify-between items-center">
            Preu pressuposat: 
            <span className="text-4xl">{totalPrice} €</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;