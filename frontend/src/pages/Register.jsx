import { useState } from "react";
import Alert from "../components/Alert";
import System from "../components/System";
import axiosClient from "../config/axios";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

export default function Register() {

    const [alert, setAlert] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if([name, email, password, passwordRepeat].includes('')) {
            setAlert('Fill in all the fields');
            return
        }

        if(password < 6) {
            setAlert('The password should have at least 6 characters')
            return
        }

        if(password !== passwordRepeat) {
            setAlert('The passwords sholud be the same')
            return
        }

        try {
            await axiosClient.post('/user/register', {name, email, password, passwordRepeat});
            setOpenModal(!openModal)
        } catch (error) {
            setAlert(error.response.data.msg);
        }
    }
    
    return(
        <>
            <div className="flex justify-evenly pt-28 h-screen pb-10 box-border">
                <Modal show={openModal} title='Register complete' body='Check your email to confirm your account'>
                    <Link to='/login' onClick={() => setOpenModal(!openModal)} className="border-2 border-white border-opacity-25 px-4 py-2 rounded hover:bg-white hover:bg-opacity-25 transition-colors duration-150">Ok</Link>
                </Modal>
                <div className="hidden lg:flex items-center justify-center">
                    <System />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col border-2 border-white p-6 w-2/4 lg:w-1/4 border-opacity-50 rounded-md">
                    <Alert message={alert} />
                    <label htmlFor="name" className="block p-2 text-lg mt-2">
                        Name:
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="w-full p-2 rounded-md text-black" 
                        placeholder="John Smith"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="email" className="block p-2 text-lg mt-2">
                        Email:
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="w-full p-2 rounded-md text-black" 
                        placeholder="email@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="password" className="block p-2 text-lg mt-2">
                        Password:
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="w-full p-2 rounded-md text-black"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="passwordRepeat" className="block p-2 text-lg mt-2">
                        Confirm password:
                    </label>
                    <input 
                        type="password" 
                        name="passwordRepeat" 
                        id="passwordRepeat" 
                        className="w-full p-2 rounded-md text-black"
                        placeholder="repeat password"
                        value={passwordRepeat}
                        onChange={e => setPasswordRepeat(e.target.value)}
                    />
                    <p className="mt-12 text-sm text-gray-400">
                        Do you have an account?
                        <a href="/login" className="text-white hover:text-gray-400 transition-colors duration-150"> Login</a>
                    </p>
                    <button className="bg-white text-black font-lexend py-2 px-2 rounded-sm text-base hover:bg-gray-300 transition-all duration-200 mt-3">Submit</button>
                </form>
            </div>
        </>
    )
}