import { Link } from "react-router-dom";


export default function Product({ product, price = null, id = null, srcImage, name }) {
    return (
        <Link
            to={id ? `/catalog/${product}/${id}` : `/catalog/${product}`}
            className={`animate-fade h-[500px] w-72 overflow-hidden flex flex-col justify-center border-2 border-white border-opacity-25 transition-colors duration-200 ${price ?'pt-2 pb-1':'pt-1'} ${id ? 'hover:bg-white hover:bg-opacity-15' : ''}`}
        >
            <img 
                src={srcImage ? srcImage : `/src/assets/products/${product}.png`}
                className="h-4/5 w-[95%] object-cover bg-white hover:bg-opacity-15 rounded-md bg-opacity-5 self-center active:scale-95 duration-50 transition-all"
                alt={`image of the product ${name}`}
            />
            <div className="p-4">
                <h3 className={`${id ? 'text-sm' : 'text-lg'} tracking-tight font-semibold capitalize`}>{id ? name : product}</h3>
                {
                    price ?
                        <h2 className="text-xs text-gray-300">
                            {
                                price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })
                            }
                        </h2>
                    : ''
                }
            </div>
        </Link>
    )
}