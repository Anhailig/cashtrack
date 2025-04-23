'use client';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">CashTrack — твій простий трекер фінансів</h1>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
                Ведіть облік доходів та витрат без реєстрації. Все зберігається у вашому браузері. Просто, безпечно, анонімно.
            </p>

            <img
                src="/preview.jpg"
                alt="Скрін додатку"
                className="w-full max-w-md rounded shadow-lg mb-8 border"
            />

            <Link
                href="/"
                className="bg-green-600 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-green-700 transition"
            >
                Почати користуватись →
            </Link>

            <p className="mt-6 text-sm text-gray-400">
                Open Source на <a href="https://github.com/Anhailig/cashtrack" target="_blank" className="underline">GitHub</a>
            </p>
        </div>
    );
}
