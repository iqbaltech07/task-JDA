import React from 'react';
import { products } from '~/data/products';
import Link from 'next/link'; // jika kamu pakai Next.js

const Cards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white/10 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                            <div className="text-lg font-bold text-blue-600 mb-4">${product.price}</div>
                            <Link
                                href={`/product/${product.id}`}
                                className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition"
                            >
                                Detail Product
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
