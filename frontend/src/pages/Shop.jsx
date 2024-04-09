import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from 'react-router-dom'
import noShop from '../assets/no-shop.svg'
import Modal from "../components/Modal";

export default function Shop() {

    const [products, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const { auth, createOrder } = useAuth();
    const navigate = useNavigate();
    
    
    useEffect(() => {
        if(Object.keys(auth).length === 0) {
            navigate('/login');
            return
        }

        const shop = JSON.parse(localStorage.getItem('products'));
        setProducts(shop);
    }, []);

    const handleClick = () => {
        localStorage.removeItem('products');
        setProducts([]);
        setOpenModal(!openModal)
    }

    const makeOrder = () => {
        const newProducts = products.map(product => {
            return {
                id: product.id,
                category: product.category,
                units: product.units
            }
        })

        createOrder(newProducts, auth._id)
    }

    const deleteProduct = (e) => {
        const parent = e.target.parentNode;
        const id = parent.dataset.id;

        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);

        localStorage.setItem('products', JSON.stringify(newProducts));
    }

    return (
        products === null || products.length < 1 ?
            <section className="h-screen pt-32 w-full flex justify-center items-center flex-col">
                <div className="border-2 border-white border-opacity-25 p-5 w-1/2 h-3/4 flex flex-col items-center justify-around rounded-sm">
                    <h1 className="text-2xl font-semibold">You have no articles yet</h1>
                    <img src={noShop} className="h-2/4 opacity-25" />
                    <p className="text-gray-500">Add articles to the shopping car and then go back!</p>
                    <Link to='/catalog' className='bg-white text-black font-lexend py-1 px-2 rounded-sm hover:bg-gray-300 transition-all duration-200 text-base' >Start buying!</Link>
                </div>
            </section>
        :
            <section className="h-screen pt-32 w-full flex justify-center items-center flex-col">
                <div className="border-2 border-white border-opacity-25 p-5 w-5/6 lg:w-1/2 flex flex-col items-start gap-6 rounded-sm">
                    <h1 className="text-xl my-2">All your products</h1>
                    {
                        products.map(product => {
                            return (
                                <article className="flex items-start gap-10 w-full" key={product.id} data-id={product.id}>
                                    <img src={product.image} className="w-20 h-20 object-cover rounded-md" />
                                    <div>
                                        <h2 className="font-semibold">{product.name}</h2>
                                        <small className="mr-4 capitalize text-gray-300">
                                            Category: <span className="text-white">{product.category}</span>
                                        </small>
                                        <small className="text-gray-300">
                                            Units: <span className="text-white">{product.units}</span>
                                        </small>
                                    </div>
                                    <button
                                        onClick={deleteProduct}
                                        className="bg-red-800 px-2 py-1 rounded hover:bg-red-600 transition-colors duration-150 ml-auto"
                                    >
                                        Delete
                                    </button>
                                </article>
                            )
                        })
                    }
                    <div className="flex w-full gap-2">
                        <button 
                            type="submit" 
                            className='flex-1 bg-white text-black font-lexend py-2 rounded-sm hover:bg-gray-300 transition-all duration-200 text-xl font-semibold'
                            onClick={makeOrder}
                        >
                            Buy
                        </button>
                        <button
                            onClick={() => setOpenModal(!openModal)}
                            className='font-lexend py-2 rounded-sm hover:bg-white hover:bg-opacity-10 border-2 border-white border-opacity-25 transition-all duration-200 text-xl px-4 active:bg-red-500 '
                        >
                            <img src={noShop}></img>
                        </button>
                    </div>
                </div>
                <Modal show={openModal} title='Empty cart' body='Are you sure you want to empty your shopping cart?'  >
                    <button
                        onClick={handleClick}
                        className="bg-red-800 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-150"
                    >
                        Empty
                    </button>
                    <button 
                        onClick={() => setOpenModal(!openModal)} 
                        className="border-2 border-white border-opacity-25 px-4 py-2 rounded hover:bg-white hover:bg-opacity-25 transition-colors duration-150"
                    >
                        Cancel
                    </button>
                </Modal>
            </section>
    )
}