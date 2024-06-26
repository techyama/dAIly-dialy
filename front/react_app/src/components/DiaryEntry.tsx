import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addEntry } from '../features/diary/diarySlice';

const DiaryEntry: React.FC = () => {
    const [entry, setEntry] = useState<string>('');
    const dispatch = useAppDispatch();
    const message = useAppSelector((state) => state.diary.message);
    const status = useAppSelector((state) => state.diary.status);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addEntry(entry));
        setEntry('');
    };

    return (
        <div className="max-w-screen-lg mx-auto mt-10 p-5 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-5">Let's write diary!</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    className="w-full h-40 p-2 border border-gray-300 rounded mb-4" 
                    value={entry} 
                    onChange={(e) => setEntry(e.target.value)} 
                    disabled={status === 'loading'}
                />
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? '送信中...' : '送信'}
                </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default DiaryEntry;
