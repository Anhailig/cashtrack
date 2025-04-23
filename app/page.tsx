'use client'

import React from 'react';
import Header from '../components/Header';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Summary from '../components/Summary';
import Chart from '../components/Chart';
import { useStore } from '../lib/store';
import {useHasMounted} from "@/lib/useHasMounted";

const Home = () => {
    const hasMounted = useHasMounted();
    const { transactions, addTransaction } = useStore();

    if (!hasMounted) return null;

  return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="p-4 space-y-8">
          <TransactionForm addTransaction={addTransaction} />
          <TransactionList transactions={transactions} />
            <Summary transactions={transactions} />
            <Chart transactions={transactions} />
        </main>
      </div>
  );
};

export default Home;
