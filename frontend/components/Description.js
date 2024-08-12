import React from 'react';

function Description({ title, explanation }) {
    return (
        <div className="description">
            <h2>{title}</h2>
            <p>{explanation}</p>
        </div>
    );
}

export default Description;