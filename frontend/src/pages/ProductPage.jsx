import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Modal from "../components/Modal";
import axiosClient from "../config/axios";

export default function ProductPage({ category }) {
    const { product_id } = useParams();

    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axiosClient(`/product/${category}/${product_id}`);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                setOpenModal(true);
            }

        }

        getProduct();
    }, []);

    return(
        <>
            <h1>Producto</h1>
            <Modal show={openModal} title='Error' body='Error loading the page'>
                <Link 
                    to='/'
                    onClick={() => setOpenModal(!openModal)}
                    className="bg-red-800 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-150"
                >
                    Ok
                </Link>
            </Modal>
        </>
    )
}