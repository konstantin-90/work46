import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function AlbumPage() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h1>Альбоми</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
            <Link to={`/photos/${album.id}`}>Photos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumPage;
