import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axiosClient from "../config/axios";

import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import Table from "../components/Table";
import shopping from '../assets/shopping.svg'
import Gallery from "../components/Gallery";
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";

export default function ProductPage({ category }) {
    const { product_id } = useParams();
    const { auth } = useAuth();

    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);
    const [units, setUnits] = useState(1);

    const [comment, setComment] = useState('');
    const [alert, setAlert] = useState('');
    const [error, setError] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axiosClient(`/product/${category}/${product_id}`);
                setProduct(data[category]);
                setComments(data.comments);
                setLoading(false);
            } catch (error) {
                setOpenModal(true);
            }
        }

        getProduct();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(comment === '') {
            setAlert('Fill in all the fields')
            return
        }

        const url = `/product/${category}/comment`;
        const token = localStorage.getItem('token');

        if(!token) {
            navigate('/login')
            return
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const { data } = await axiosClient.post(url, {comment, product_id, category, customer_id: auth._id }, config);
            setAlert(data.msg);
            setError(false);
            setComment('');
        } catch (error) {
            console.error(error);
        }
    }
    
    const addProduct = () => {
        notify();
        const products = JSON.parse(localStorage.getItem('products')) ?? [];

        const item = {
            id: product_id,
            category,
            units
        }

        if(products.length > 0) {
            products.forEach(product => {
                if(product.id === item.id) {
                    product.units += item.units;
                }
            })
        }

        if(products.some(product => product.id === item.id)) {
            localStorage.setItem('products', JSON.stringify(products));
            return
        }

        const newProducts = [...products, item];
        localStorage.setItem('products', JSON.stringify(newProducts));
    }

    const notify = () => {
        toast.success('Check your shopping car', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return(
        <>
            {
                loading ?
                <div className="grid place-content-center h-screen">
                    <Spinner />
                </div>
                :
                <main>
                    <div className="w-full flex min-h-screen lg:h-screen h-auto pt-32 flex-col lg:flex-row">
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
                                        if(e.target.value < 1) {
                                            setUnits(1);
                                            return
                                        }
                                        setUnits(parseInt(e.target.value))
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
                                    onClick={addProduct}
                                >
                                    <img src={shopping}></img>
                                </button>
                            </div>
                        </section>
                    </div>
                    <section className="flex items-center justify-center p-10 w-full flex-col gap-2">
                        <h2 className="text-base text-gray-300">Give us your opinion!</h2>
                        <div className="w-1/3">
                            <Alert message={alert} error={error} />
                        </div>
                        <div className="flex gap-2 w-full justify-center mb-10">
                            <textarea 
                                className="text-base rounded-md text-black p-1 text-pretty w-2/4 lg:w-1/3"  
                                onChange={(e) => setComment(e.target.value)}
                                value={comment}
                            />
                            <button 
                                className='bg-white text-black font-lexend py-2 px-4 h-10 rounded-sm hover:bg-gray-300 transition-all duration-200 text-base font-semibold self-end'
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                        <div className="w-full flex justify-center flex-col items-center border-opacity-25 border-white">
                            {
                                comments.length > 0 ?
                                comments.map((comment, i) => {
                                    return (
                                        <div className=" w-3/4 lg:w-1/2 border-b-2 border-opacity-25 border-white p-4 flex flex-col gap-1" key={i}>
                                            <h3 className="text-sm text-gray-400">{comment.name}</h3>
                                            <p className="text-base">{comment.comment}</p>
                                        </div>
                                    )
                                })
                                :
                                    <h3 className="text-base text-gray-400">No comments!</h3>
                            }
                        </div>
                        
                    </section>
                </main>
            }
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                stacked
            />
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