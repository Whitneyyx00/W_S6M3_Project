import React from 'react';

const ImageVideo = ({ mediaUrl, mediaType }) => {
    return (
        <div>
            {mediaType === 'video' ? (
                <iframe
                title="space-video"
                width="100%"
                height="500px"
                src={mediaUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
            ) : (
                <img src={mediaUrl} alt="NASA Astronomy" style={{ width: '100%', height: 'auto' }} />
            )}
        </div>
    );
};

export default ImageVideo;