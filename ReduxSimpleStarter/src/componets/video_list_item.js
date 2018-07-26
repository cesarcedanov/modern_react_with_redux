import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading"><strong>{video.snippet.title}</strong></div>
                    <div>Go to video: <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>Click here!</a></div>
                </div>  
            </div>
        </li>
    );
}

export default VideoListItem;