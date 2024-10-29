
interface BudgetRequestFormProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  onSaveBudget: () => void;
  isValid: boolean;
}

const BudgetRequestForm: React.FC<BudgetRequestFormProps> = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  onSaveBudget,
  isValid,
}) => {
  return (
    <div className="mt-6 p-6 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Sol·licitar pressupost</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom i cognoms
          </label>
          <input
            type = "text"
            value = {name}
            onChange = {(event) => setName(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder = "Introdueix el teu nom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telèfon
          </label>
          <input
            type = "tel"
            value = {phone}
            onChange = {(event) => setPhone(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder = "Introdueix el teu telèfon"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correu electrònic
          </label>
          <input
            type = "email"
            value = {email}
            onChange = {(event) => setEmail(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder = "Introdueix el teu email"
          />
        </div>
        <button
          onClick = {onSaveBudget}
          disabled = {!isValid}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Sol·licitar pressupost
        </button>
      </div>
    </div>
  );
};

export default BudgetRequestForm;
