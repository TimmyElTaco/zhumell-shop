import { Link } from "react-router-dom"
import Product from "./Product"
import arrow from '../assets/arrow.svg';


export default function CatalogProducts({ products }) {
    return(
        <div className="h-auto">
            <div className="w-full h-full">
                <h3 className="text-3xl font-semibold capitalize mb-10">{products[0].category}</h3>
                <div className="flex justify-evenly items-center gap-4 flex-wrap lg:flex-nowrap pb-20">
                    {
                        products.map((product) => {
                            return (
                                <Product key={product._id} id={product._id} product={product.category} price={product.price} srcImage={product.images[0]} name={product.name} />
                            )
                        })
                    }
                    <Link 
                        to={`/catalog/${products[0].category}`}
                        className='text-3xl h-[500px] animate-fade flex items-center justify-center hover:text-gray-500 w-72 border-2 border-white border-opacity-25'
                    >
                        Show more
                        <img src={arrow} className="animate-pulse w-6 h-6" alt='arrow pointing to the right' />
                    </Link>
                </div>
            </div>
        </div>
    )
}