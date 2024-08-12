import React from 'react';

const Info = ({ description, credits }) => {
    return (
        <div>
            <p>{description}</p>
            {credits && <p><strong>Credit:</strong> {credits}</p>}
        </div>
    );
};

export default Info;