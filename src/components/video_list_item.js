import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={ () => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-obeject" src={imageURL}/>
        </div>

        <div className="media-body">
          <div className="media-heading" src={video.snippet.title}></div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;