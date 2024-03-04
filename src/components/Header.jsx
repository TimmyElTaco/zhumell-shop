export default function Header() {
    return (
      <header className="fixed flex w-full justify-around h-24 items-center">
        <h2 className="text-4xl font-grotesk">ZHUMELL</h2>
        <nav>
          <ul className="flex gap-6 text-base">
            <a href="#" className="relative after:transition-all after:duration-150 hover:after:h-1 after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-0 after:bg-white after:opacity-35">Home</a>
            <a href="#" className="relative after:transition-all after:duration-150 hover:after:h-1 after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-0 after:bg-white after:opacity-35">Catalog</a>
            <a href="#" className="relative after:transition-all after:duration-150 hover:after:h-1 after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-0 after:bg-white after:opacity-35">Contact Us</a>
          </ul>
        </nav>
      </header>
    )
}