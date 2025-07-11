import React from 'react';
import { products } from '~/data/products';
import Link from 'next/link';

const Cards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white/20 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-52 object-cover"
                    />
                    <div className="p-5 flex flex-col h-full">
                        <h2 className="text-2xl font-semibold text-white mb-2">{product.name}</h2>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{product.description}</p>
                        <div className="mt-auto flex items-center justify-between">
                            <div className="text-xl font-bold text-blue-400">${product.price}</div>
                            <Link
                                href={`/product/${product.id}`}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                            >
                                Detail
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
