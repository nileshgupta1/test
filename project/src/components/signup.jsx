import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createContext, useContext } from 'react';
import Credentials from './components/context/context'



const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [submit, setSubmit] = useState(false);


    useEffect(() => {
        const func = async () => {
            var creds = {
                "firstname": fname,
                "lastname": lname,
                "email": email,
                "password": pass,
            };
            const res = await axios.post("http://localhost/3030/signup", creds);
            console.log(res.status);
        }
        func();
    }, [submit]);

    return (
        <>
            <div>
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)}></input>
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)}></input>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="text" value={pass} onChange={(e) => setPass(e.target.value)}></input>
            </div>
            <button onClick={() => setSubmit(true)}>Submit</button>
            <div>
                <p>Already a user?</p>
                <button>Login</button>
            </div>
        </>
    );
};

export default Signup;