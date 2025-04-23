import {create} from 'zustand';
import { saveToStorage, loadFromStorage } from './storage';

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

const stored = loadFromStorage('transactions');

export const useStore = create<Store>((set) => ({
    transactions: (stored || []).map((t: any) => ({
        ...t,
        date: new Date(t.date),
    })),
    addTransaction: (transaction) =>
        set((state) => {
            const updated = [...state.transactions, transaction];
            saveToStorage('transactions', updated);
            return { transactions: updated };
        }),
}));
