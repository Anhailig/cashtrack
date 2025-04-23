import React from 'react';

const TransactionList = ({ transactions }: any) => {
    return (
        <div className="space-y-4">
            {transactions.map((transaction: any, index: number) => (
                <div key={index} className="p-4 border rounded shadow-sm">
                    <p>{transaction.category}</p>
                    <p>{transaction.amount} грн</p>
                    <p>{transaction.type === 'income' ? 'Доход' : 'Расход'}</p>
                    <p>{new Date(transaction.date).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
