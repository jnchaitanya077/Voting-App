import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CandidateCard({ name, image, id, email }) {
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
        const res = await axios.post("http://localhost:9000/vote", candidateId, { headers })

        alert(res.data.msg)
        history.push("/")
    }

    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary" onClick={() => handleSubmit(id)}>Vote</button>
            </div>
        </div>
    );
}

export default CandidateCard;