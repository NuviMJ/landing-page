import React from 'react';
import './VideoCard.scss'
import HoverVideoPlayer from 'react-hover-video-player';

interface Props {
    thumb?: any;
    url: string;
    className?: string;
    title: string;
    des: string;

}

const VideoCard = (prop: Props) => {
    const displayS = prop.thumb ? 'block' : 'none';
    return (
        <div className={"VideoCard " + prop.className}>
            <div className="VideoCard-wrapper">
                <div className="VideoCard-videoContainer">
                    <HoverVideoPlayer
                        videoSrc={prop.url}
                        pausedOverlay={
                            <img
                                src={prop.thumb}
                                alt=""
                                style={{
                                    // Make the image expand to cover the video's dimensions
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: displayS
                                }}
                            />
                        }
                        loadingOverlay={
                            <div className="loading-overlay">
                                <div className="loading-spinner"/>
                            </div>
                        }
                    />
                </div>
                <h4>{prop.title}</h4>
                <p>{prop.des}</p>
            </div>
        </div>
    );
};

export default VideoCard;
