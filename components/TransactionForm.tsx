'use client'

import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }: any) => {
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [type, setType] = useState<'income' | 'expense'>('income');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTransaction({ amount, category, type, date: new Date() });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm">Сумма</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-sm">Категория</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div>
                <label className="block text-sm">Тип</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value as 'income' | 'expense')}
                    className="w-full p-2 border rounded"
                >
                    <option value="income">Доход</option>
                    <option value="expense">Расход</option>
                </select>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                Добавить транзакцию
            </button>
        </form>
    );
};

export default TransactionForm;
