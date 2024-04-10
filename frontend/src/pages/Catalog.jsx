import { useEffect, useState } from "react"
import axiosClient from "../config/axios";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

import arrow from '../assets/arrow.svg';
import CatalogProducts from "../components/CatalogProducts";

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
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getCatalog();
    }, [])

    return (
        <div className="flex flex-col items-center">
            <h1 className="pt-32 pb-10 text-3xl md:text-4xl text-gray-300">ALL OUR <span className="bg-white bg-opacity-10">PRODUCTS</span></h1>
            <nav className="h-1/2 lg:h-full list-none flex flex-col md:flex-row p-4 pb-8 gap-4 md:gap-10 lg:gap-20 text-xl items-center justify-center border-b-2 border-white border-opacity-10 w-11/12 md:w-5/6 lg:w-3/4">
                <li>
                    <Link 
                        to='/catalog/telescopes' 
                        className="relative pt-1 px-1 after:transition-all after:duration-150 hover:after:h-2 after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:opacity-35"
                    >
                        Telescopes
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/catalog/binoculars'
                        className="relative pt-1 px-1 after:transition-all after:duration-150 hover:after:h-2 after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:opacity-35"
                    >
                        Binoculars
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/catalog/accessories'
                        className="relative pt-1 px-1 after:transition-all after:duration-150 hover:after:h-2 after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:opacity-35"
                    >
                        Accessories
                    </Link>
                </li>
            </nav>
            <section className="flex flex-col justify-start px-5 pt-5 w-11/12 md:w-5/6 lg:w-3/4 mx-auto">
                {
                    loading ?
                        <div className="h-screen w-full flex justify-center items-center">
                            <Spinner />
                        </div>
                    :
                    <>
                        <CatalogProducts products={telescopes} />
                        <CatalogProducts products={binoculars} />
                        <CatalogProducts products={accessories} />
                    </>
                }
            </section>
        </div>
    )
}