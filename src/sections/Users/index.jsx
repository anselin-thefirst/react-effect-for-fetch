import {useEffect, useState} from 'react';
import UserList from './components/UsersList';

function UsersSection() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/anselin-thefirst/contact')
    .then (res => res.json())
    .then (data => {setUsers(data);})
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
