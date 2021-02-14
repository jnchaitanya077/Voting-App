import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function Login({ path, name }) {
    console.log(path);
    const history = useHistory();
    function handleSubmit(event) {
        event.preventDefault()

        let userDetails = {
            email: document.getElementById('username').value,
            password: document.getElementById('password').value
        }

        const headers = {
            'Content-Type': 'application/json'
        }

        const response = axios.post(`http://localhost:9000${path}`, userDetails, { headers })
            .then(function (resp) {
                console.log(typeof resp.data.status)
                if (path === '/login') {
                    // check user password and username
                    if (resp.data.status == 200) {
                        // if already voted
                        if (resp.data.email === 'admin@gmail.com') {
                            history.push({
                                pathname: "/admin",
                                state: {
                                    email: resp.data.email,
                                }
                            })
                        }
                        else if (resp.data.isVoted) {
                            alert("Already Voted!!")
                            history.push("/")
                        } else {
                            // if not voted send for voting 
                            history.push({
                                pathname: "/voting",
                                state: { email: resp.data.email }
                            })
                        }

                    } else {
                        alert("Wrong Credentials")
                        history.push("/");
                    }
                } else {
                    alert(resp.data.msg)
                    history.push("/")
                }

            })
            .catch(e => console.log(e))

        // console.log(userDetails)

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