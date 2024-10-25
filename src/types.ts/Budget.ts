export interface Budget {
    id: string;
    name: string;
    phone: string;
    email: string;
    services: string[];
    totalPrice: number;
    webPages?: number;
    webLanguages?: number;
    date: string;
  }