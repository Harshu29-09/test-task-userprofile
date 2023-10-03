import React from "react";
import { Link } from "react-router-dom";
import "./UserDirectory.css";

const UserDirectory = ({ users }) => {
    return (
        <div className="user-directory">
            <h1>User Directory</h1>
            <div className="user-cards">
                {users.map((user) => (
                    <Link key={user.id} to={`/user/${user.id}`} className="user-card-link">
                        <div className="user-card">
                            <div className="user-card-header">
                                <h2>Name: {user.name}</h2>
                                <p>Posts: {user.posts.length}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserDirectory;
