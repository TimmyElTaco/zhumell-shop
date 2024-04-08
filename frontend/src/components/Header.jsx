import { useState } from "react";
import useAuth from "../hooks/useAuth"
import Modal from "./Modal";
import { Link, useNavigate } from "react-router-dom";
import shopping from '../assets/shopping.svg'

export default function Header() {

    const [openModal, setOpenModal] = useState(false);

    const { auth, logOut } = useAuth();
    
    const navigate = useNavigate();

    const handleClick = () => {
      logOut();
      setOpenModal(!openModal)
      navigate('/');
    }


    return (
      <header className="fixed flex w-full justify-around h-24 items-center bg-black z-10">
        <h2 className="text-3xl font-grotesk select-none">ZHUMELL</h2>
        <nav>
          <ul className="flex gap-4 text-base">
            <Link to="/" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Home</Link>
            <Link to="/catalog" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Catalog</Link>
            {
              Object.keys(auth).length === 0 ?
                  <a href="/login" className='bg-white text-black font-lexend py-1 px-2 rounded-sm text-base hover:bg-gray-300 transition-all duration-200'>
                    Log In
                  </a>
                :
                  <button onClick={() => setOpenModal(!openModal)} className='bg-white text-black font-lexend py-1 px-2 rounded-sm text-base hover:bg-gray-300 transition-all duration-200'>
                    Log Out
                  </button>
            }
            <Link to='/shop' className="grid place-content-center px-2 border-2 border-white border-opacity-25 rounded-sm hover:bg-white hover:bg-opacity-25">
              <img src={shopping}/>
            </Link>
          </ul>
        </nav>
        <Modal show={openModal} title='Log out' body={'Are you sure you want to log out?'}>
            <button 
              onClick={handleClick} 
              className="bg-red-800 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-150"
            >
              Log out
            </button>
            <button 
              onClick={() => setOpenModal(!openModal)} 
              className="border-2 border-white border-opacity-25 px-4 py-2 rounded hover:bg-white hover:bg-opacity-25 transition-colors duration-150"
            >
              Cancel
            </button>
        </Modal>
      </header>
    )
}