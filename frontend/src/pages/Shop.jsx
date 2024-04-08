import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from 'react-router-dom'
import noShop from '../assets/no-shop.svg'

export default function Shop() {

    const [products, setProducts] = useState([]);

    const {auth} = useAuth();
    const navigate = useNavigate();
    
    
    useEffect(() => {
        if(Object.keys(auth).length === 0) {
            navigate('/login');
            return
        }

        const shop = JSON.parse(localStorage.getItem('products'));
        setProducts(shop);
        console.log(shop);
    }, []);

    return (
        products === null ?
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
                <div className="border-2 border-white border-opacity-25 p-5 w-1/2 h-3/4 min-h-3/4 flex flex-col items-center justify-around rounded-sm">
                    {

                    }
                </div>
            </section>

    )
}