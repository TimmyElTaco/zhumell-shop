import { useEffect, useState } from "react"
import axiosClient from "../config/axios";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

import arrow from '../assets/arrow.svg';

export default function Catalog() {

    const [loading, setLoading] = useState(true);

    const [telescopes, setTelescopes] = useState('');
    const [binoculars, setBinoculars] = useState('');
    const [accessories, setAccessories] = useState('');

    useEffect(() => {
        const getCatalog = async () => {
            try {
                const { data } = await axiosClient('/catalog');
                setTelescopes(data.telescopes);
                setBinoculars(data.binoculars);
                setAccessories(data.accessories);
                console.log(data.telescopes.category)
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getCatalog();
    }, [])

    return (
        <div className="h-auto grid grid-cols-5">
            <nav className="h-full border-r-2 border-white col-start-1 border-opacity-25 mt-32 list-none flex p-4 flex-col gap-20 text-xl items-center">
                <li>
                    <Link 
                        to='/catalog/telescopes' 
                        className="relative pt-1 px-1 after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35"
                    >
                        Telescopes
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/catalog/binoculars'
                        className="relative pt-1 px-1 after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35"
                    >
                        Binoculars
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/catalog/accessories'
                        className="relative pt-1 px-1 after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35"
                    >
                        Accessories
                    </Link>
                </li>
            </nav>
            <section className="mt-32 flex flex-col justify-start px-5 col-span-4">
                {
                    loading ?
                        <div className="h-screen w-screen flex justify-center items-center">
                            <Spinner />
                        </div>
                    :
                    <>
                        <div className="w-full">
                            <h3 className="text-3xl font-semibold">Telescopes</h3>
                            <div className="w-full h-[1px] bg-white bg-opacity-25 mt-2" />
                            <div className="flex h-[600px] justify-evenly items-center">
                    
                                {
                                    telescopes.map((telescope) => {
                                        return (
                                            <Product key={telescope._id} id={telescope._id} product={telescope.category} price={telescope.price} srcImage={telescope.images[0]} />
                                        )
                                    })
                                }
                                <Link
                                    to='/product/telescopes'
                                    className='text-xl animate-fade flex items-end hover:text-gray-500'
                                >
                                    Show more
                                    <img src={arrow} className="animate-pulse w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="w-full">
                                <h3 className="text-3xl font-semibold">Binoculars</h3>
                                <div className="w-full h-[1px] bg-white bg-opacity-25 mt-2" />
                                <div className="flex h-[600px] justify-evenly items-center">
                                    {
                                        binoculars.map((binocular) => {
                                            return (
                                                <Product key={binocular._id} id={binocular._id} product={binocular.category} price={binocular.price} srcImage={binocular.images[0]} />
                                            )
                                        })
                                    }
                                    <Link 
                                        to='/product/binoculars'
                                        className='text-xl animate-fade flex items-end hover:text-gray-500'
                                    >
                                        Show more
                                        <img src={arrow} className="animate-pulse w-6 h-6" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full">
                                <h3 className="text-3xl font-semibold">Accessories</h3>
                                <div className="w-full h-[1px] bg-white bg-opacity-25 mt-2" />
                                <div className="flex h-[500px] justify-evenly items-center">

                                    {
                                        accessories.map((accessorie, i) => {
                                            return (
                                                <Product key={accessorie._id} id={accessorie._id} product={accessorie.category} price={accessorie.price} srcImage={accessorie.images[0]} />
                                            )
                                        })
                                    }
                                    <Link 
                                        to='/product/accessories'
                                        className='text-xl animate-fade flex items-center hover:text-gray-500'
                                    >
                                        Show more
                                        <img src={arrow} className="animate-pulse w-6 h-6" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </section>
        </div>
    )
}