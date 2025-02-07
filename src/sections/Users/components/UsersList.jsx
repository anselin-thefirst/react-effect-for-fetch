import UsersListItem from './UsersListItem';

function UserList({users}) {
    return (
        <ul className="users-list">
            {users &&
            users.map((user, index) => {
                console.log(user)
                return <UsersListItem key={index} user={user} /> 
            })}
        </ul>
    )
}

export default UserList