import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div className="bg-linear-to-r from-yellow-50 to-yellow-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                {/* LEFT */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-yellow-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-yellow-50 text-yellow-800 rounded-box z-10 mt-3 w-52 p-2 shadow-md">
                            <li><NavLink to="/" className='focus:bg-transparent hover:bg-transparent active:text-yellow-800 '>Home</NavLink></li>
                            <li><NavLink to="/all_products" className='focus:bg-transparent hover:bg-transparent active:text-yellow-800 '>All Products</NavLink></li>
                            <li><NavLink to="/wishlist" className='focus:bg-transparent hover:bg-transparent active:text-yellow-800 '>Wish List</NavLink></li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold text-yellow-800">
                        Furniture<span className="text-yellow-600">BD</span>
                    </a>
                </div>

                {/* CENTER (DESKTOP MENU) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-yellow-800 font-medium">
                        <ul className="menu menu-horizontal px-1 text-yellow-800 font-medium">
                            <li><NavLink to="/" className='focus:bg-transparent hover:bg-transparent active:text-yellow-800 '>Home</NavLink></li>
                            <li><NavLink to="/all_products" className='focus:bg-transparent hover:bg-transparent active:text-yellow-800 '>All Products</NavLink></li>
                            <li><NavLink to="/wishlist" className='focus:bg-transparent hover:bg-transparent active:text-yellow-800 '>Wish List</NavLink></li>
                        </ul>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end">
                    <a className="btn bg-yellow-700 hover:bg-yellow-600 text-white border-none rounded-xl">
                        Shop Now
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Nav;