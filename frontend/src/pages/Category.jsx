import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";
import axiosClient from "../config/axios";
import Product from "../components/Product";
import Division from "../components/Division";

export default function Category() {

    const { product } = useParams();

    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axiosClient(`/product/${product}`);
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setOpenModal(true);
            }
        }

        getProduct();
    }, []);

    return (
        <main className="w-full flex items-center justify-center flex-col pt-32 gap-4">
            <h1 className="capitalize text-3xl font-semibold">{product}</h1>
            <Division />
            {
                loading ?
                    <div className="h-screen flex items-center justify-center">
                        <Spinner />
                    </div>
                :
                    <section className="w-3/4 gap-4">
                        <div className="flex justify-evenly items-center gap-4 flex-wrap lg:flex-nowrap pb-20">
                    
                                {
                                    products.map((product) => {
                                        return (
                                            <Product key={product._id} id={product._id} product={product.category} price={product.price} srcImage={product.images[0]} name={product.name} />
                                        )
                                    })
                                }
                            </div>
                    </section>
            }
            <Modal show={openModal} title='Error' body='Error loading the page'>
                <Link 
                    to='/'
                    onClick={() => setOpenModal(!openModal)}
                    className="bg-red-800 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-150"
                >
                    Ok
                </Link>
            </Modal>
        </main>
    )
}