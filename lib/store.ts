import {create} from 'zustand';

interface Transaction {
    amount: number;
    category: string;
    type: 'income' | 'expense';
    date: Date;
}

interface Store {
    transactions: Transaction[];
    addTransaction: (transaction: Transaction) => void;
}

export const useStore = create<Store>((set: any) => ({
    transactions: [],
    addTransaction: (transaction: Transaction) =>
        set((state: any) => ({
            transactions: [...state.transactions, transaction],
        })),
}));
