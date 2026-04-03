
import { Bounce, toast } from 'react-toastify';

const DetailsCard = ({ item }) => {


    const handleAddToWishList = () => {
        const existingData = JSON.parse(localStorage.getItem('wishlist')) || []
        const isExist = existingData.some(i => i.id === item.id)

        let updatedData = []
        if (existingData) {
            if (isExist) return toast.info(`"${item.name}" -is already added`, {
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
            updatedData = [...existingData, item]
            toast.success(`"${item.name}" -Successfully added to cart`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });
        } else {
            updatedData.push(item)
        }
        localStorage.setItem('wishlist', JSON.stringify(updatedData))
    }
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto my-6">
            <div className="flex flex-col md:flex-row">
                {/* IMAGE */}
                <div className="md:w-1/2">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>
                {/* INFO */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div className='space-y-5'>
                        <h3 className="text-yellow-900 font-bold text-2xl">{item.name}</h3>
                        <p className="text-yellow-800 font-semibold mt-2">${item.price}</p>
                        <p className="text-yellow-800 mt-1"><span className="font-semibold">Category:</span> {item.category}</p>
                        <p className="text-yellow-800 mt-1"><span className="font-semibold">Material:</span> {item.material}</p>
                        <p className="text-yellow-800 mt-1"><span className="font-semibold">Dimensions:</span> {item.dimensions}</p>
                        <p className="text-yellow-800 mt-1">
                            <span className="font-semibold">Stock:</span> {item.stock ? "Available" : "Out of stock"}
                        </p>
                        <p className="text-yellow-800 mt-2">{item.description}</p>
                    </div>
                    <button
                        onClick={handleAddToWishList}
                        className={`mt-4 w-full md:w-auto btn bg-yellow-600 hover:bg-yellow-700 text-white border-none rounded-xl `}>
                        add to wish list 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
