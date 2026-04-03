import React, { useEffect, useState } from 'react';
import WishlistCard from '../../Componenets/WishlistCard';
import EmptyCart from '../../Componenets/EmptyCart';
import { Bounce, toast } from 'react-toastify';

const WishList = () => {
    const [wishlist, setWishlist] = useState([])
    const [sort, setSort] = useState('none')
    // const {products} = useProducts()
    useEffect(() => {
        const savedItem = localStorage.getItem('wishlist')
        if (savedItem) setWishlist(JSON.parse(savedItem))
    }, [])

    let total = 0
    for (let item of wishlist) {
        total += item.price
    }
    let totalShipping = 0
    if (wishlist.length >= 3) {
        totalShipping = 25 * wishlist.length
    } else {
        totalShipping = 50 * wishlist.length
    }

    const sortedItems = () => {
        if (sort === 'ascending') {
            return [...wishlist].sort((a, b) => b.price - a.price)
        } else if (sort === 'descending') {
            return [...wishlist].sort((a, b) => a.price - b.price)
        } else {
            return wishlist
        }
    }
    const sortItems = sortedItems()

    const handleProceed = () => {
        localStorage.removeItem('wishlist')
        setWishlist([])
        if (wishlist.length === 0) {
            toast.warning('No item to proceed', {
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
            return
        }
        toast.success('Successfully proceed', {
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
        <div className="max-w-7xl lg:flex gap-4 mx-auto px-5 my-10">
            <section className="flex-3">
                <div className='flex justify-between'>
                    <h2 className="text-3xl font-bold text-yellow-900 mb-5">
                        Wish List ({sortItems.length})
                    </h2>
                    <label >
                        <select className='select'
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="none">Sort by price</option>
                            <option value="ascending">High to Low</option>
                            <option value="descending">Low to High</option>
                        </select>
                    </label>
                </div>
                {/* Wishlist Items */}
                <div className="flex-3 space-y-3">
                    {wishlist.length === 0 ? <EmptyCart /> : sortItems.map(item => (
                        <WishlistCard key={item.id} setWishlist={setWishlist} item={item} />
                    ))}
                </div>

                {/* Summary Sidebar */}
            </section>
            <div className='flex-1 lg:mt-10 sticky top-0 self-start'>
                <div className=" flex flex-col justify-between  bg-yellow-50  p-5  rounded-xl shadow-md">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">Total Price: $ {total}</h3>
                        <h4 className="text-yellow-800 font-medium">Shipping Fee: $ {totalShipping}</h4>
                        <p>{wishlist.length >= 3 && '50% off shipping charge for ordering 3 or above furniture'}</p>
                    </div>
                    <div className="flex justify-between mt-5 border-t pt-3">
                        <h3 className="font-bold text-xl">Total Costs:</h3>
                        <p className="font-semibold text-xl">${total + totalShipping}</p>
                    </div>
                    <button onClick={handleProceed} className="mt-5 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-xl">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishList;