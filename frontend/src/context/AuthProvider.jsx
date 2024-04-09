import { createContext, useEffect, useState } from "react"
import axiosClient from "../config/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});

    const logOut = () => {
        localStorage.removeItem('token');
        setAuth({});
    }

    useEffect(() => {

        const autenticar = async () => {
            const token = localStorage.getItem('token');
    
            if(!token) {
                return
            }
    
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
    
            try {
            
                const { data } = await axiosClient('/user', config);
                setAuth(data);

            } catch (error) {
                console.error(error);
                setAuth({});
            }
        } 
        autenticar();
    }, []);

    const createOrder = async (products, id) => {
        const token = localStorage.getItem('token');

        if(!token) {
            navigate('/login')
            return
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const { data } = await axiosClient.post('/buy/create-order', { products, id }, config);
            window.location.href = data;
            localStorage.removeItem('products');
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                logOut,
                createOrder
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;