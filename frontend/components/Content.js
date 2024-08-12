import React from 'react';
import ImageVideo from './ImageVideo';
import Info from './Info';

const Content = ({ apodData }) => {
    if (!apodData) return <h3>Loading...</h3>;

    return (
        <main>
            <ImageVideo mediaUrl={apodData.url} mediaType={apodData.media_type} />
            <Info description={apodData.explanation} credits={apodData.copyright} />
        </main>
    );
};

export default Content;