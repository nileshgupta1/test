import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Credentials from './components/context/context'



const Authenticate = () => {
    const [email, password] = useContext(Credentials);

    useEffect(() => {
        const func = async () => {
            var creds = {
                "username": email,
                "password": password
            };
            const res = axios.post(`http://localhost/3030/token`, creds);
            token = res.data;
        }
        func();
    })

    useEffect(() => {
        const fun = async () => {
            const res = await axios.get(`http://localhost/3000/users/${email}/validateToken`, {
                headers: {
                    "Authentication": `Bearer ${token}`
                }
            })
            console.log(res.status);
        }
    }, [token])
    return (
        <>
            <div>Authentication</div>
        </>
    );
};

export default Authenticate;