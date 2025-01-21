
import React from 'react';

const VideoList = ({ videos, onEdit, onDelete }) => {
  const transformToEmbedUrl = (url) => {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // Retornar la URL original si no es de YouTube
  };

  return (
    <div className="VideoList">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <iframe
            width="100%"
            height="200"
            src={transformToEmbedUrl(video.videoUrl)}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>{video.title}</h3>
          <p>{video.category}</p>
          <p>{video.description}</p>
          <button onClick={() => onEdit(video)}>Editar</button>
          <button onClick={() => onDelete(video.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
