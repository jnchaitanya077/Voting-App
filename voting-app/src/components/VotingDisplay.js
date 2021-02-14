import React, { useEffect, useState } from 'react';
import CandidateCard from './CandidateCard';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';


function VotingDisplay(props) {
    const location = useLocation();
    const history = useHistory();

    const [flag, setFlag] = useState(false);
    const [users, setusers] = useState([]);
    const [userEmail, setEmail] = useState("");


    useEffect(() => {
        const state = location.state;
        if (state) {
            const email = state.email;

            console.log("email:" + email)
            setFlag(true)
            setEmail(email);
            console.log(email)
        } else {
            history.push("/")
        }

        // fetch the candidates
        axios.get("http://localhost:9000/fetchCandidates")
            .then(res => setusers(res.data))
            .catch(e => console.log(e))

    }, [])

    return (

        <>
            {flag ? <div className="container">
                <h1>Candidate</h1>
                <button className="btn btn-primary float-end" onClick={() => history.push("/")}>Logout</button>
                <div>
                    {users ? users.map((candidate) =>
                        <CandidateCard
                            name={candidate.name}
                            image={candidate.image}
                            id={candidate._id}
                            email={userEmail}
                        />
                    ) : <h2>Refresh page...</h2>}
                </div>
            </div> : <h3 className="text-center">Loading....</h3>}
        </>

    );
}

export default VotingDisplay;

const candidates = [
    {
        name: "Srinivas",
        image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
        votes: 0

    },
    {
        name: "Basha",
        image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
        votes: 0
    },
    {
        name: "Akhil",
        image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
        votes: 0
    },
    {
        name: "Chaitanya",
        image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
        votes: 0
    }, {
        name: "Sai Teja",
        image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
        votes: 0
    },

]