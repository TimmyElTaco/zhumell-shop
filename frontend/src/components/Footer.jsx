export default function Footer() {
    return(
        <footer className="w-full h-40 bg-white text-black flex justify-around items-center">
            <div>
                <h3 className="text-lg font-bold">Products</h3>
                <ul>
                    <li>
                        <a href="/catalog/telescopes" className="text-sm">Telescopes</a>
                    </li>
                    <li>
                        <a href="/catalog/binoculars" className="text-sm">Binoculars</a>
                    </li>
                    <li>
                        <a href="/catalog/accessories" className="text-sm">Accessories</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold">Made by</h3>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/luis-guzman-bautista/" target="_blank" rel="nonoreferrer noopener" className="text-sm">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/TimmyElTaco" className="text-sm" target="_blank" rel="nonoreferrer noopener">GitHub</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/TimmyElTaco" className="text-sm" target="_blank" rel="nonoreferrer noopener">Twitter/X</a>
                    </li>
                </ul>
            </div>
            <div></div> 
        </footer>
    )
}