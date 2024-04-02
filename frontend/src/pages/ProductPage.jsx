import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function ProductPage({ product }) {
    const { product_id } = useParams();

    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axiosClient(`/product/${product}/${product_id}`);
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setOpenModal(true);
            }

        }

        getProduct();
    }, []);

    return(
        <h1>Producto</h1>
    )
}