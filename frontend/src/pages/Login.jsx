import { useState } from "react";
import Alert from "../components/Alert";
import System from "../components/System";
import useAuth from "../hooks/useAuth"
import axiosClient from "../config/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    
    const [alert, setAlert] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { setAuth } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if([email, password].includes('')) {
            setAlert('Fill in all the fields')
            return
        } else if(password.length < 6) {
            setAlert('The password should have at least 6 characters')
            return
        }

        try {
            const { data } = await axiosClient.post('/user/login', {email, password});
            localStorage.setItem('token', data.token);
            
            setAuth(data);
            navigate('/');
        } catch (error) {
            setAlert(error.response.data.msg);
        }

    }

    return (
        <>
            <div className="flex justify-evenly pt-32 h-screen">
                <div className="hidden lg:flex items-center justify-center">
                    <System />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col border-2 border-white h-3/4 p-6 md:w-1/2 lg:w-1/4 border-opacity-50 rounded-md">
                    <Alert message={alert} />
                    <label htmlFor="email" className="block p-2 text-lg mt-6">
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
                    <label htmlFor="password" className="block p-2 text-lg mt-6">
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
                    <p className="mt-20 text-sm text-gray-400">
                        Don't have an account yet?
                        <a href="/register" className="text-white hover:text-gray-400 transition-colors duration-150"> Register</a>
                    </p>
                    <button className="bg-white text-black font-lexend py-2 px-2 rounded-sm text-base hover:bg-gray-300 transition-all duration-200 mt-3">Submit</button>
                </form>
            </div>
        </>
    )
}