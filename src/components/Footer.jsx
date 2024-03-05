export default function Footer() {
    return(
        <footer className="w-full h-40 bg-white text-black flex justify-around items-center">
            <div>
                <h3 className="text-lg font-bold">Products</h3>
                <ul>
                    <li>
                        <a href="#" className="text-sm">Telescopes</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">Binoculars</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold">Support</h3>
                <ul>
                    <li>
                        <a href="#" className="text-sm">Product Manuals</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">Warranty Information</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div></div> 
        </footer>
    )
}