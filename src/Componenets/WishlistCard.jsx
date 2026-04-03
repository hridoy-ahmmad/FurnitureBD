
import React from 'react';
import { Bounce, toast } from 'react-toastify';

const WishlistCard = ({ item, setWishlist }) => {

    const handleRemove = (id) => {

        const existingData = JSON.parse(localStorage.getItem('wishlist')) || []
        const updatedData = existingData.filter(i => i.id !== id)
        setWishlist(updatedData)
        localStorage.setItem('wishlist', JSON.stringify(updatedData))
        toast.success(`"${item.name}" -Successfully Removed from cart`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

    }



    return (
        <div key={item.id} className="bg-white shadow-lg rounded-2xl overflow-hidden flex justify-between w-full items-center border border-yellow-700 px-5">
            <img
                src={item.image}
                alt={item.name}
                className="object-cover h-18 w-18 rounded-2xl"
            />
            <div className="p-4 flex  flex-1 justify-between items-center">
                <div>
                    <h3 className="font-semibold text-yellow-900 text-lg">{item.name}</h3>
                    <p className="text-yellow-800 font-semibold mt-1">${item.price}</p>
                    <p className="text-yellow-800 mt-1 text-sm">{item.category}</p>
                </div>
                <button
                    onClick={() => handleRemove(item.id)}
                    className="px-5 py-2 bg-yellow-900 hover:bg-yellow-800 text-white rounded-xl"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default WishlistCard;