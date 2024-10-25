import React from "react";
import { Budget } from "../types.ts/Budget";

interface BudgetListProps {
  budgets: Budget[];
  onDeleteBudget: (id: string) => void;
}

const BudgetList: React.FC<BudgetListProps> = ({ budgets, onDeleteBudget }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Pressupostos en curs: </h2>
      {budgets.length === 0 ? (
        <p className="text-gray-600">No hi ha pressupostos guardats encara.</p>
      ) : (
        <div className="space-y-4">
          {budgets.map((budget) => (
            <div key = {budget.id} className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{budget.name}</h3>
                  <p className="text-gray-600">Telèfon: {budget.phone}</p>
                  <p className="text-gray-600">Email: {budget.email}</p>
                  <p className="text-gray-600">Data: {budget.date}</p>
                  <p className="text-gray-600">
                    Serveis: {budget.services.join(", ")}
                  </p>
                  {budget.webPages && budget.webLanguages && (
                    <p className="text-gray-600">
                      Web: {budget.webPages} pàgines, {budget.webLanguages}{" "}
                      llenguatges
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
  );
};

export default BudgetList;
