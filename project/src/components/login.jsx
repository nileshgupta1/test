import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        const func = async () => {
            var creds = {
                "password": pass
            };
            const res = axios.post(`http://localhost/3030/users/${email}/login`, creds);

        }
        func();
    })
    return (
        <>
            <div>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="text" value={pass} onChange={(e) => setPass(e.target.value)}></input>
            </div>
        </>
    );
};

export default Login;