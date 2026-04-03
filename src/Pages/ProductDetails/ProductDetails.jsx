import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';
import DetailsCard from '../../Componenets/DetailsCard';
import Loading from '../../Componenets/Loading';

const ProductDetails = () => {
    const { id } = useParams()
    const { products, loading } = useProducts()
    
    if (loading) return <Loading />
    const filteredProducts = products.filter(item => item.id === Number(id))
    console.log(filteredProducts);

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-2xl text-center text-yellow-900 font-bold'>Product Details</h1>
            <div>
                {
                    filteredProducts.map(item => <DetailsCard key={item.is} item={item} />)
                }
            </div>
        </div>
    );
};

export default ProductDetails;