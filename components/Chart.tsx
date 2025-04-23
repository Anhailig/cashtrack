'use client';

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ transactions }: any) => {
    const dataByDate = transactions.reduce((acc: any, t: any) => {
        const date = new Date(t.date).toLocaleDateString('uk-UA');
        const value = t.type === 'income' ? t.amount : -t.amount;
        acc[date] = (acc[date] || 0) + value;
        return acc;
    }, {});

    const sortedDates = Object.keys(dataByDate).sort(
        (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );

    const chartData = {
        labels: sortedDates,
        datasets: [
            {
                label: 'Прибыль по дням',
                data: sortedDates.map((date) => dataByDate[date]),
                fill: false,
                borderColor: '#2563EB',
                tension: 0.2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">График прибыли</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default Chart;
