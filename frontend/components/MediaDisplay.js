import React from 'react';
import styled from 'styled-components';

// Styled Components
const MediaContainer = styled.div`
   margin: 20px auto;
   max-width: 800px;
`;


const MediaDisplay = ({ mediaUrl, mediaType }) => {
    return (
        <MediaContainer>
            {mediaType === 'image' ? (
                <img src={mediaUrl} alt="NASA APOD" style={{ width: '100%' }} />
            ) : mediaType === 'video' ? (
                <video controls style={{ width: '100%' }}>
                    <source src={mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Unsupported media type</p>
            )}
        </MediaContainer>
    );
};

export default MediaDisplay;