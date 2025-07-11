'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import { products } from '~/data/products';
import PageContainer from '~/components/layouts/PageContainer';

const DetailProduct: React.FC = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return (
            <div className="text-center mt-10 text-red-500 font-semibold">
                Product not found.
            </div>
        );
    }

    return (
        <PageContainer withNavbar withContainer className="max-w-4xl mx-auto p-6">
            <button
                onClick={() => history.back()}
                className="mb-6 text-blue-600 hover:underline"
            >
                ← Back
            </button>

            <div className="bg-white/10 shadow-md rounded-2xl overflow-hidden md:flex">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 h-64 object-cover"
                />

                <div className="p-6 flex-1">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-white text-sm mb-4">Product ID: {product.id}</p>
                    <p className="text-white mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-blue-600 mb-6">${product.price}</div>

                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </PageContainer>
    );
};

export default DetailProduct;
