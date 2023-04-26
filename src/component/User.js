import React from 'react';
import {Link} from "react-router-dom";

const User = ({users}) => {
    return (
        <div>
            {
            users.map(user => (
            <div key={user.id}>
                {user.first_name}
                {user.last_name}
            </div>
            ))}
            <Link to=".." relative="path">
                Cancel
            </Link>
        </div>
    );
};

export default User;