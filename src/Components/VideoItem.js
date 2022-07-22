import React from "react";

function VideoItem({ onVideoSelect, video }) {
	return (
		<div onClick={() => onVideoSelect(video)}>
			<img
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
            />
            <div className='lower'>
                <div className='title'>{video.snippet.title}</div>
                <h4>{video.snippet.channelTitle}</h4>
            </div>
		</div>
	);
}

export default VideoItem;
