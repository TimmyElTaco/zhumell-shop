import useAuth from "../hooks/useAuth"

export default function Header() {

    const { auth, logOut } = useAuth();

    console.log(Object.keys(auth).length === 0)

    return (
      <header className="fixed flex w-full justify-around h-24 items-center bg-black z-10">
        <h2 className="text-3xl font-grotesk select-none">ZHUMELL</h2>
        <nav>
          <ul className="flex gap-6 text-base">
            <a href="/" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Home</a>
            <a href="#" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Catalog</a>
            <a href="#" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Contact Us</a>
            {
              Object.keys(auth).length === 0 ?
                  <a href="/login" className='bg-white text-black font-lexend py-1 px-2 rounded-sm text-base hover:bg-gray-300 transition-all duration-200'>
                    Log In
                  </a>
                :
                  <button onClick={logOut} className='bg-white text-black font-lexend py-1 px-2 rounded-sm text-base hover:bg-gray-300 transition-all duration-200'>
                    Log Out
                  </button>
            }
          </ul>
        </nav>
      </header>
    )
}