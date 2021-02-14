import React, { useEffect, useState } from 'react';
import CandidateCard from './CandidateCard';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';


function VotingDisplay(props) {

    const [flag, setFlag] = useState(false);
    const [users, setUsers] = useState([]);
    const [userEmail, setEmail] = useState("");

    const location = useLocation();
    const history = useHistory();

    const BASE_URI = "https://voting-web-app-server.herokuapp.com"


    useEffect(() => {
        const state = location.state;
        // if state is present then only display Candidates list
        if (state) {
            const email = state.email;
            setFlag(true)
            setEmail(email);
        } else {
            // redirect to homepage
            history.push("/")
        }

        // fetch the candidates from DB
        axios.get(`${BASE_URI}/fetchCandidates`)
            .then(res => setUsers(res.data))
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

// const candidates = [
//     {
//         name: "Srinivas",
//         image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
//         votes: 0

//     },
//     {
//         name: "Basha",
//         image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
//         votes: 0
//     },
//     {
//         name: "Akhil",
//         image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
//         votes: 0
//     },
//     {
//         name: "Chaitanya",
//         image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
//         votes: 0
//     }, {
//         name: "Sai Teja",
//         image: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
//         votes: 0
//     },

// ]