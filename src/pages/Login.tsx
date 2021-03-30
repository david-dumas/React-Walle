import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        console.log(content);

        setRedirect(true);
        props.setName(content.name);
    }

    if (redirect) {
        return <Redirect to="/"/>;
    }
 
    return (
        <body className="text-center">
            <form onSubmit={submit}>
                <img className="mb-4" src="https://seader.nl/wp-content/uploads/2017/11/wall-e_03.jpg" alt="" width='200px' ></img>

                <h1 className="h3 mb-3 fw-normal">Log hier in:</h1>
                <input type="email" className="form-control" placeholder="Email address" required
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
            </form>
        </body>
    );
};

export default Login;