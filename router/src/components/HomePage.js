import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <Link to={`/albums/${user.id}`}>Album</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
