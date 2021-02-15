import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CandidateCard({ name, image, id, email }) {
    const BASE_URI = "https://voting-web-app-server.herokuapp.com"
    // const BASE_URI = "http://localhost:9000"


    const history = useHistory();
    console.log(email);
    const candidateId = {
        id: id,
        email: email
    }

    async function handleSubmit(id) {

        const headers = {
            'Content-Type': 'application/json'
        }

        const res = await axios.post(`${BASE_URI}/vote`, candidateId, { headers })

        alert(res.data.msg)
        history.push("/")
    }

    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <button className="btn btn-primary float-center" onClick={() => handleSubmit(id)}>Vote</button>
            </div>
        </div>
    );
}

export default CandidateCard;