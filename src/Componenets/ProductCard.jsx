import React from 'react';
import { useNavigate } from 'react-router';

const ProductCard = ({ item }) => {
    const navigate = useNavigate()

    const handleDetails = () => {
        navigate(`/product_details/${item.id}`)
    }
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="text-yellow-900 font-bold text-lg">{item.name}</h3>
                <p className="text-yellow-800 font-semibold mt-1">${item.price}</p>
                <button
                    onClick={handleDetails}
                    className="mt-4 w-full btn bg-yellow-600 hover:bg-yellow-700 text-white border-none rounded-xl">
                    Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;