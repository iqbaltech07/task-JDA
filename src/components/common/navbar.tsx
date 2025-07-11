import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">MyApp</Link>
                </div>
                <ul className="hidden md:flex space-x-6 text-lg font-medium">
                    <li>
                        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300 transition">About</Link>
                    </li>
                    <li>
                        <Link href="/profile" className="hover:text-gray-300 transition">Profile</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
