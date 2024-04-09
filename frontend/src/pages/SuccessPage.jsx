import { Link } from "react-router-dom";

import check from '../assets/check.svg'

export default function SuccessPage() {
    return (
        <main className="h-screen flex flex-col justify-center items-center gap-10">
            <h1 className="text-4xl font-bold">Success</h1>
            <img src={check} className="h-40" alt="Check for the success process" />
            <p className="text-base opacity-60">Pay processed succesfully, you can keep buying!</p>
            <Link 
                to="/"
                className="px-4 py-2 text-xl border-2 border-white border-opacity-25 rounded-sm hover:bg-white hover:bg-opacity-25"
            >
                Go to home
            </Link>
        </main>
    )
}