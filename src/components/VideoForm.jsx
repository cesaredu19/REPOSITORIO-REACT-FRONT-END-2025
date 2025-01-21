
import React, { useState, useEffect } from 'react';
import './VideoForm.css';

const VideoForm = ({ onSubmit, onClose, initialData }) => {
  const [videoData, setVideoData] = useState({ title: '', category: '', imageUrl: '', videoUrl: '', description: '' });

  useEffect(() => {
    if (initialData) setVideoData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(videoData);
    onClose();
  };

  return (
    <div className="video-form-container">
      <h2>Nuevo Video</h2>
      <p>Complete el formulario para crear una nueva tarjeta de video.</p>
      <form onSubmit={handleSubmit} className="video-form">
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={videoData.title}
            onChange={handleChange}
            placeholder="Ingrese el título"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <input
            type="text"
            id="category"
            name="category"
            value={videoData.category}
            onChange={handleChange}
            placeholder="Ingrese la categoría"
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">URL de Imagen</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={videoData.imageUrl}
            onChange={handleChange}
            placeholder="Ingrese el enlace de la imagen"
          />
        </div>

        <div className="form-group">
          <label htmlFor="videoUrl">URL del Video</label>
          <input
            type="text"
            id="videoUrl"
            name="videoUrl"
            value={videoData.videoUrl}
            onChange={handleChange}
            placeholder="Ingrese el enlace del video"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={videoData.description}
            onChange={handleChange}
            placeholder="Ingrese una breve descripción"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-save">Guardar</button>
          <button type="button" className="btn btn-close" onClick={onClose}>Cerrar</button>
        </div>
      </form>
    </div>
  );
};

export default VideoForm;
