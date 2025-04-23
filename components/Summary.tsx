'use client';
import React from 'react';

const Summary = ({ transactions }: any) => {
    const income = transactions
        .filter((t: any) => t.type === 'income')
        .reduce((acc: number, t: any) => acc + t.amount, 0);

    const expense = transactions
        .filter((t: any) => t.type === 'expense')
        .reduce((acc: number, t: any) => acc + t.amount, 0);

    const net = income - expense;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded shadow">
                <h2 className="text-lg font-semibold">Доходы</h2>
                <p className="text-2xl text-green-600">{income} ₴</p>
            </div>
            <div className="bg-red-100 p-4 rounded shadow">
                <h2 className="text-lg font-semibold">Расходы</h2>
                <p className="text-2xl text-red-600">{expense} ₴</p>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow">
                <h2 className="text-lg font-semibold">Прибыль</h2>
                <p className="text-2xl text-blue-600">{net} ₴</p>
            </div>
        </div>
    );
};

export default Summary;
