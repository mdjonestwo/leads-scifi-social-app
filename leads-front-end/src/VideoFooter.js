import React from 'react';
import "./VideoFooter.css";


function VideoFooter({ channel, description, movieTitle}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <div className="videoFooter_ticker">
                    <p>{movieTitle}</p>
                </div>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default VideoFooter
