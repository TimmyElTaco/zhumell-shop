import { useState } from "react";
import useAuth from "../hooks/useAuth"
import Modal from "./Modal";
import { Link, useNavigate } from "react-router-dom";
import shopping from '../assets/shopping.svg'

export default function Header() {

    const [openModal, setOpenModal] = useState(false);
    const [active, setActive] = useState(false);

    const { auth, logOut } = useAuth();
    
    const navigate = useNavigate();

    const handleClick = () => {
      logOut();
      setOpenModal(!openModal)
      navigate('/');
    }

    return (
      <header className="fixed flex w-full justify-around h-24 items-center bg-black z-10">
        <a href="/" className="text-3xl font-grotesk select-none">ZHUMELL</a>
        <div onClick={() => setActive(!active)} className="relative cursor-pointer md:hidden">
          <button 
            className={`
              transition-all duration-200
              relative h-[2px] w-6 -top-1
              before:h-[2px] before:w-6 before:bg-white before:absolute before:left-0 before:-top-2 before:transition-transform before:duration-200
              after:h-[2px] after:w-6 after:bg-white after:absolute after:left-0 after:top-2 after:transition-transform after:duration-200
              ${active ? 'bg-black before:rotate-45 before:top-1/2 after:-rotate-45 after:-top-1/2' : 'bg-white'}  
            `}
          />
        </div>

        <nav className={`absolute top-[100%] w-full md:w-auto origin-top-right ${active ? 'scale-y-100' : 'scale-y-0'} p-4 md:h-auto overflow-hidden md:scale-y-100 md:p-0 md:top-0 md:relative bg-black md:bg-transparent transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row items-center md:items-start gap-4 text-base">
            <li className="flex items-start">
              <Link to="/" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Home</Link>
            </li>
            <li className="flex items-start">
              <Link to="/catalog" className="pt-1 px-1 relative after:transition-all after:duration-150 hover:after:h-full after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-white after:opacity-35">Catalog</Link>
            </li>
            {
              Object.keys(auth).length === 0 ?
                  <li className="flex items-center">
                    <a href="/login" className='bg-white text-black font-lexend py-1 px-2 rounded-sm text-base hover:bg-gray-300 transition-all duration-200'>
                      Log In
                    </a>
                  </li>
                :
                  <li className="flex items-center">
                    <button onClick={() => setOpenModal(!openModal)} className='bg-white text-black font-lexend py-1 px-2 rounded-sm text-base hover:bg-gray-300 transition-all duration-200'>
                      Log Out
                    </button>
                  </li>
            }
            <li className="flex items-center">
              <Link to='/shop' className="grid place-content-center px-2 py-1 border-2 border-white border-opacity-25 rounded-sm hover:bg-white hover:bg-opacity-25">
                <img src={shopping} alt='A shopping cart'/>
              </Link>
            </li>
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