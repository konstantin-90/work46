import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Albums = () => {
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('userId');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h1>Альбоми користувача {userId}</h1>
      {albums.map(album => (
        <div key={album.id}>
          <h3>{album.title}</h3>
          <p>Id: {album.id}</p>
          <p>UserId: {album.userId}</p>
          <p>Title: {album.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Albums;
