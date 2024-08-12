import React from 'react';

function MediaDisplay({ mediaUrl, mediaType }) {
    return (
        <div className="media-display">
            {mediaType === 'image' ? (
                <img src={mediaUrl} alt="NASA APOD" />
            ) : mediaType === 'video' ? (
                <video controls>
                    <source src={mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Unsupported media type</p>
            )}
        </div>
    );
}

export default MediaDisplay;