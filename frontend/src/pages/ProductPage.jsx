import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

import axiosClient from "../config/axios";

import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import Table from "../components/Table";
import shoping from '../assets/shoping.svg'
import Gallery from "../components/Gallery";

export default function ProductPage({ category }) {
    const { product_id } = useParams();

    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);
    const [units, setUnits] = useState(0);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axiosClient(`/product/${category}/${product_id}`);
                setProduct(data[category]);
                setComments(data[comments]);
                setLoading(false);
            } catch (error) {
                setOpenModal(true);
            }
        }

        getProduct();
    }, []);

    return(
        <>
            {
                loading ?
                <div className="grid place-content-center h-screen">
                    <Spinner />
                </div>
                :
                <main className="w-full flex min-h-screen lg:h-screen h-auto pt-32 flex-col lg:flex-row">
                    <section className="flex-1 animate-fade">
                        <Gallery images={product.images}/>
                    </section>
                    <section className="flex-1 p-12 flex flex-col justify-between animate-fade gap-8">
                        <h1 className="text-2xl text-balance font-semibold">{product.name}</h1>
                        <h3 className="text-4xl font-bold">
                            {
                                product.price.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })
                            }
                        </h3>
                        <Table product={product} />
                        <label className="text-xl font-grotesk">
                            Units:
                            <input 
                                type="number" 
                                onChange={(e) => {
                                    if(e.target.value < 0) {
                                        setUnits(0);
                                        return
                                    }
                                    setUnits(e.target.value)
                                }} 
                                className="ml-2 text-base w-1/6 rounded-md text-black p-1 text-center" 
                                value={units} 
                            />
                        </label>
                        <div className="flex gap-2">
                            <button 
                                type="submit" 
                                className='w-3/4 bg-white text-black font-lexend py-2 rounded-sm hover:bg-gray-300 transition-all duration-200 text-xl font-semibold'
                            >
                                Buy
                            </button>
                            <button 
                                className='font-lexend py-2 rounded-sm hover:bg-white hover:bg-opacity-10 border-2 border-white border-opacity-25 transition-all duration-200 text-xl px-4 active:bg-green-500'
                            >
                                <img src={shoping}></img>
                            </button>
                        </div>
                    </section>
                </main>
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
        </>
    )
}