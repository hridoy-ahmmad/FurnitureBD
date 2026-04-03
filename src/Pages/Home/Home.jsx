import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Componenets/ProductCard';
import { Navigate, useNavigate } from 'react-router';

const Home = () => {
    const { products, loading } = useProducts()
    const featuredProducts = products.slice(0, 3)
    const navigate = useNavigate()
    const handleAllProducts = () => {
        navigate('/all_products')
    }
    return (
        <div className=" min-h-screen max-w-7xl mx-auto">

            {/* HERO */}
            <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-yellow-900 leading-tight">
                        Modern Furniture For
                        <span className="text-yellow-700"> Your Home</span>
                    </h1>
                    <p className="mt-4 text-yellow-800">
                        Discover high-quality, stylish, and affordable furniture to make your home look premium and comfortable.
                    </p>
                    <button className="mt-6 btn bg-yellow-600 hover:bg-yellow-700 text-white border-none rounded-xl">
                        Shop Now
                    </button>
                </div>

                <div>
                    <img
                        src="https://mislayer.com/img/BFL/fg-1729168020.webp"
                        alt="sofa"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </section>
            <section>
                <h1 className='text-3xl font-bold text-yellow-900 text-center'>Our Products</h1>
                <div className='grid md:grid-cols-3 gap-5 my-5'>
                    {
                        featuredProducts.map(item => <ProductCard key={item.id} item={item} />)
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <button
                        onClick={handleAllProducts}
                        className="px-5 py-3 bg-yellow-600 hover:bg-yellow-700 text-white border-none rounded-xl">
                        Browse All Furniture
                    </button>
                </div>

            </section>


            {/* WHY US */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold text-yellow-900 mb-8 text-center">
                    Why Choose Us
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow text-center">
                        <h3 className="text-yellow-800 font-semibold">Premium Quality</h3>
                        <p className="text-yellow-800 mt-2">
                            Top-notch materials and long-lasting furniture.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow text-center">
                        <h3 className="text-yellow-800 font-semibold">Affordable Price</h3>
                        <p className="text-yellow-800 mt-2">
                            Best value for money with stylish designs.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow text-center">
                        <h3 className="text-yellow-800 font-semibold">Fast Delivery</h3>
                        <p className="text-yellow-800 mt-2">
                            Quick and safe delivery to your doorstep.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-yellow-200 py-16 mt-10">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold text-yellow-900">
                        Make Your Home Beautiful
                    </h2>
                    <p className="text-yellow-800 mt-3">
                        Upgrade your living space with our premium furniture collection.
                    </p>
                    <button className="mt-5 btn bg-yellow-600 hover:bg-yellow-700 text-white border-none rounded-xl">
                        Explore Now
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Home;



