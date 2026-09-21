'use client';

import { useEffect, useState, ReactNode } from 'react';
import Preloader from './Preloader';

interface ClientWrapperProps {
    children: ReactNode;
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Optional: lock scroll saat loading
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [loading]);

    return (
        <>
            {loading && <Preloader onFinish={() => setLoading(false)} />}
            <div
                className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                {children}
            </div>
        </>
    );
};

export default ClientWrapper;