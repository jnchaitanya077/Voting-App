import React from 'react';

function Card({ image, name, votes }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">No of votes: {votes}</p>

            </div>
        </div>
    );
}

export default Card;