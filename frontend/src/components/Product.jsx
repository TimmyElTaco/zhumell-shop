import { Link } from "react-router-dom";


export default function Product({ product }) {
    return (
        <Link 
            to={`/product/${product}`}
            className="h-3/4 w-72 border-2 border-white border-opacity-25 rounded-lg overflow-hidden"
        >
            <img 
                src={`/src/assets/products/${product}.webp`}
                className="h-4/5 w-full object-cover"
            />
            <div className="p-4">
                <h3 className="text-2xl tracking-tight font-semibold capitalize">{product}</h3>
            </div>
        </Link>
    )
}