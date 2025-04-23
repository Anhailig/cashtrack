'use client';
import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExportButton = ({ transactions }: { transactions: any[] }) => {
    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            transactions.map((t) => ({
                Дата: new Date(t.date).toLocaleDateString('uk-UA'),
                Тип: t.type === 'income' ? 'Дохід' : 'Витрата',
                Сума: t.amount,
                Коментар: t.note || '',
            }))
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Транзакції');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const file = new Blob([excelBuffer], { type: 'application/octet-stream' });

        saveAs(file, `cashtrack-${new Date().toISOString().slice(0, 10)}.xlsx`);
    };

    return (
        <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
            Експортувати в Excel
        </button>
    );
};

export default ExportButton;
