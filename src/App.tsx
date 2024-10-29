import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PriceList, { services } from './components/PriceList';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import BudgetList from './components/BudgetList';
import BudgetRequestForm from './components/BudgetRequestForm';
import { Budget } from './types.ts/Budget';

function Calculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [webPages, setWebPages] = useState(1);
  const [webLanguages, setWebLanguages] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budgets, setBudgets] = useState<Budget[]>([]);

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

  const isValidForm = () => {
    return (
      name.trim() !== '' &&
      phone.trim() !== '' &&
      email.trim() !== '' &&
      selectedServices.length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
  };

  const handleSaveBudget = () => {
    if (!isValidForm()) {
      alert('Si us plau, omple tots els camps necessaris correctament');
      return;
    }

    const newBudget: Budget = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      services: selectedServices,
      totalPrice,
      date: new Date().toLocaleDateString('ca-ES'),
      ...(selectedServices.includes('Web') && {
        webPages,
        webLanguages,
      }),
    };

    setBudgets(prev => [...prev, newBudget]);
    setName('');
    setPhone('');
    setEmail('');
    setSelectedServices([]);
    setWebPages(1);
    setWebLanguages(1);
  };

  const handleDeleteBudget = (id: string) => {
    setBudgets(prev => prev.filter(budget => budget.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] flex flex-col items-center justify-center p-4">
      <Header />
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-yellow-100 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            ← Tornar a l'inici
          </Link>
        </div>
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

        <BudgetRequestForm
          name = {name}
          setName = {setName}
          phone = {phone}
          setPhone = {setPhone}
          email = {email}
          setEmail = {setEmail}
          onSaveBudget = {handleSaveBudget}
          isValid = {isValidForm()}
        />
        
        <BudgetList budgets = {budgets} onDeleteBudget = {handleDeleteBudget} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Welcome />} />
        <Route path = "/calculator" element = {<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;