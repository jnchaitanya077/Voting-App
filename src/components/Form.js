import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function Login({ path, name }) {

    const history = useHistory();
    const BASE_URI = "https://voting-web-app-server.herokuapp.com"

    const handleSubmit = async (event) => {
        event.preventDefault()

        let userDetails = {
            email: document.getElementById('username').value,
            password: document.getElementById('password').value
        }

        const headers = {
            'Content-Type': 'application/json'
        }

        try {
            const response = await axios.post(`${BASE_URI}${path}`, userDetails, { headers });
            authenticate(response, path)

        } catch (error) {
            console.log(error)

        }
        // const response = axios.post(`${BASE_URI}${path}`, userDetails, { headers })
        //     .then(function (resp) {
        //         console.log(typeof resp.data.status)
        //         authenticate(resp, path)
        //     })
        //     .catch(e => console.log(e))
    }

    async function authenticate(resp, path) {
        if (path === '/login') {
            const status = await resp.data.status;
            // check user password and username
            if (status == 200) {
                // check if he is admin
                if (resp.data.email === 'admin@gmail.com') {
                    history.push({
                        pathname: "/admin",
                        state: {
                            email: resp.data.email,
                        }
                    })
                }//if he is not admin check the user voter or not
                else if (resp.data.isVoted) {
                    alert("Already Voted!!")
                    history.push("/")
                } else {
                    // if he is not voted send for voting 
                    history.push({
                        pathname: "/voting",
                        state: { email: resp.data.email }
                    })
                }
                // if status code is not 200 then user entered wrong password
            } else {
                alert("Wrong Credentials")
                history.push("/");
            } //if try to access without login redirect to homepage 
        } else {
            alert(resp.data.msg)
            history.push("/")
        }
    }

    return (
        <div className="container mt-5">
            <h1>{name}</h1>
            <div className="row">
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">

                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="username" id="username" required />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" name="password" id='password' required />
                                </div>
                                <button type="submit" className="btn btn-dark mt-4">{name}</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;