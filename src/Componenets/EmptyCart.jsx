
import React from 'react';
import { Link } from 'react-router';

const EmptyCart = () => {
    return (
        <section className="hero min-h-[70vh] bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {/* Yellow Icon Container */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                            <div className="relative p-8 bg-yellow-50 rounded-full border-2 border-yellow-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20 text-yellow-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Heading and Text */}
                    <h2 className="text-4xl font-extrabold text-slate-800">
                        Cart is <span className="text-yellow-500">Empty!</span>
                    </h2>
                    <p className="py-5 text-slate-500 font-medium">
                        Looks like you haven't added anything to your cart yet.
                        Start exploring our amazing products today!
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                        <Link to='/all_products' className="btn bg-yellow-400 hover:bg-yellow-500 border-none text-black px-10 rounded-full transition-all">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmptyCart;

