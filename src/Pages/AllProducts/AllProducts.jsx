import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Componenets/ProductCard';
import Loading from '../../Componenets/Loading';

const AllProducts = () => {
    const [search, setSearch] = useState('')
    const { products, loading } = useProducts()
    const inputText = search.trim().toLocaleLowerCase()
    const filteredProducts = products.filter(item => {
        const name = item.name.toLocaleLowerCase()
        const category = item.category.toLocaleLowerCase()
        const price = item.price
        const material = item.material.toLocaleLowerCase()
        const combined = `${name} ${category} ${price} ${material}`
        const result = combined.includes(inputText)
        return result
    })
    if (loading) return <Loading />
    const searchedProducts = inputText ? filteredProducts : products

    return (
        <div className='max-w-7xl mx-auto mask-y-to-sky-100 my-10 px-5'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-3xl text-yellow-900 my-5'>All Products <span className='text-xl font-semibold'>({searchedProducts.length})</span> </h1>
                <div>
                    <label className="input w-sm outline-0 focus:outline-0">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="search" placeholder="Search Products" />
                    </label>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    searchedProducts.map(item => <ProductCard key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;