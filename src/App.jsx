// App.jsx - Persistencia de datos con localStorage
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoForm from './components/VideoForm';
import VideoList from './components/VideoList';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [categories, setCategories] = useState({
    Frontend: '#00bfff',
    Backend: '#32cd32',
    'Innovación y Gestión': '#ffc107',
  });

  // Recuperar datos de localStorage al cargar la página
  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    const savedCategories = JSON.parse(localStorage.getItem('categories')) || {
      Frontend: '#00bfff',
      Backend: '#32cd32',
      'Innovación y Gestión': '#ffc107',
    };
    setVideos(savedVideos);
    setCategories(savedCategories);
  }, []);

  // Guardar datos en localStorage al actualizar
  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [videos, categories]);

  const addVideo = (video) => {
    if (!categories[video.category]) {
      // Generar un color aleatorio para la nueva categoría
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setCategories({ ...categories, [video.category]: randomColor });
    }
    setVideos([...videos, { ...video, id: Date.now() }]);
  };

  const updateVideo = (updatedVideo) => {
    setVideos(videos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video)));
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleEdit = (video) => {
    setEditingVideo(video);
    setIsFormVisible(true);
  };

  return (
    <div className="app">
      <Header onNewVideo={() => setIsFormVisible(true)} />
      <main>
        <div className="banner" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x400)' }}>
          <h2>Challenge React</h2>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>

        {isFormVisible && (
          <VideoForm
            onSubmit={editingVideo ? updateVideo : addVideo}
            onClose={() => {
              setIsFormVisible(false);
              setEditingVideo(null);
            }}
            initialData={editingVideo}
          />
        )}

        <div className="categories">
          {Object.keys(categories).map((category) => (
            <section key={category}>
              <h3 className="category-title" style={{ backgroundColor: categories[category] }}>{category}</h3>
              <VideoList
                videos={videos.filter((video) => video.category === category)}
                onEdit={handleEdit}
                onDelete={deleteVideo}
              />
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
