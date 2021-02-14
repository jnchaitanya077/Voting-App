import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';


function AdminDisplay(props) {
    const location = useLocation();
    const history = useHistory();

    const [flag, setFlag] = useState(false);
    const [users, setusers] = useState([]);
    const BASE_URI = "https://voting-web-app-server.herokuapp.com"


    useEffect(() => {
        const state = location.state;
        if (!state) {
            alert("No Authorization")
            history.push("/")
        } else {
            setFlag(true);
        }

        // fetch the candidates
        axios.get(`${BASE_URI}/fetchCandidates`)
            .then(res => setusers(res.data))
            .catch(e => console.log(e))

    }, [])

    return (

        <>
            {flag ? <div className="container">
                <h1>Candidate</h1>
                <button className="btn btn-primary float-end" onClick={() => { history.push("/") }}>Logout</button>
                <div>
                    {users ? users.map((candidate) =>
                        <Card
                            key={candidate._id}
                            name={candidate.name}
                            image={candidate.image}
                            id={candidate._id}
                            votes={candidate.votes}
                        />
                    ) : <h2>Refresh page...</h2>}
                </div>
            </div> : <h3 className="text-center mt-5">Loading....</h3>}
        </>

    );
}

export default AdminDisplay