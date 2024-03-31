import { Link } from "react-router-dom";


export default function Product({ product, price = null, id = null }) {
    return (
        <Link
            to={id ? `product/${product}/${id}` : `/product/${product}`}
            className={`h-3/4 w-72 overflow-hidden flex flex-col justify-center border-2 border-white border-opacity-25 ${price ?'pt-4 pb-1':'pt-1'}`}
        >
            <img 
                src={`/src/assets/products/${product}.png`}
                className="h-4/5 w-[95%] object-cover bg-white hover:bg-opacity-15 rounded-md bg-opacity-5 self-center active:scale-95 duration-50 transition-all"
            />
            <div className="p-4">
                <h3 className="text-2xl tracking-tight font-semibold capitalize">{product}</h3>
                {
                    price ?
                        <h2 className="text-sm text-gray-300">{price}</h2>
                    : ''
                }
            </div>
        </Link>
    )
}