import React from 'react';

function Card({ image, name, votes }) {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">No of votes: {votes}</p>

            </div>
        </div>
    );
}

export default Card;