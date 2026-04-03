import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import WishList from "../Pages/WishList/WishList";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Loading from "../Componenets/Loading";
import Error from "../Componenets/Error";
import NotFound from "../Componenets/notFound";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <Error />,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'wishlist',
                element: <WishList />
            },
            {
                path: 'all_products',
                Component: AllProducts
            },
            {
                path: 'product_details/:id',
                Component: ProductDetails
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router