import { useState } from 'react';
import { Budget } from '../types.ts/Budget';

interface BudgetListProps {
  budgets: Budget[];
  onDeleteBudget: (id: string) => void;
}

type SortType = 'none' | 'alphabetical' | 'date';

const BudgetList: React.FC<BudgetListProps> = ({ budgets, onDeleteBudget }) => {
  const [sortType, setSortType] = useState<SortType>('none');
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredAndSortedBudgets = () => {
    let filteredBudgets = budgets;
    
    if (searchQuery.trim()) {
      filteredBudgets = budgets.filter(budget => 
        budget.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const sortedBudgets = [...filteredBudgets];
    
    switch (sortType) {
      case 'alphabetical':
        return sortedBudgets.sort((actualBudget, nextBudget) => actualBudget.name.localeCompare(nextBudget.name, 'ca'));
      case 'date':
        return sortedBudgets.sort((actualDate, nextDate) => {
          const dateA = new Date(actualDate.date.split('/').reverse().join('-'));
          const dateB = new Date(nextDate.date.split('/').reverse().join('-'));
          return dateB.getTime() - dateA.getTime();
        });
      default:
        return sortedBudgets;
    }
  };

  return (
    <div className="mt-8">
      <div className="space-y-4">
        <div className="relative">
          <input
            type = "text"
            value = {searchQuery}
            onChange = {(event) => setSearchQuery(event.target.value)}
            placeholder = "Cercar per nom..."
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Els meus pressupostos</h2>
          <div className="flex gap-2">
            <button
              onClick = {() => setSortType('alphabetical')}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                sortType === 'alphabetical'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Ordenar per nom
            </button>
            <button
              onClick = {() => setSortType('date')}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                sortType === 'date'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Ordenar per data
            </button>
            {sortType !== 'none' && (
              <button
                onClick = {() => setSortType('none')}
                className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors"
              >
                Reiniciar ordre
              </button>
            )}
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {searchQuery && (
            <p>
              S'han trobat {getFilteredAndSortedBudgets().length} pressupost(s) amb "{searchQuery}"
            </p>
          )}
        </div>
        {budgets.length === 0 ? (
          <p className="text-gray-600">No hi ha pressupostos guardats encara.</p>
        ) : getFilteredAndSortedBudgets().length === 0 ? (
          <p className="text-gray-600">No s'han trobat pressupostos amb aquest nom.</p>
        ) : (
          <div className="space-y-4">
            {getFilteredAndSortedBudgets().map((budget) => (
              <div key = {budget.id} className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{budget.name}</h3>
                    <p className="text-gray-600">Telèfon: {budget.phone}</p>
                    <p className="text-gray-600">Email: {budget.email}</p>
                    <p className="text-gray-600">Data: {budget.date}</p>
                    <p className="text-gray-600">Serveis: {budget.services.join(', ')}</p>
                    {budget.webPages && budget.webLanguages && (
                      <p className="text-gray-600">
                        Web: {budget.webPages} pàgines, {budget.webLanguages} llenguatges
                      </p>
                    )}
                    <p className="font-bold mt-2">Total: {budget.totalPrice} €</p>
                  </div>
                  <button
                    onClick={() => onDeleteBudget(budget.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetList;