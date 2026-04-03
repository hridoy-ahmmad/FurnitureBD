import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('../Furniture.json')
            .then(data => setProducts(data.data))
            .catch(err => setErr(err))
            .finally(() => setLoading(false))
    }, [])
    return { products, loading, err }
}
export default useProducts