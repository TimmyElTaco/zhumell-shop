export default function Header() {
    return (
      <header className="fixed flex w-full justify-around h-24 items-center bg-black z-10">
        <a href="/" className="text-3xl font-grotesk">ZHUMELL</a>
        <nav>
          <ul className="flex gap-6 text-base">
            <a href="#" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Home</a>
            <a href="#" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Catalog</a>
            <a href="#" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Contact Us</a>
          </ul>
        </nav>
      </header>
    )
}