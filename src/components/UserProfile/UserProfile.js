import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Post from "../Post/Post"
import PostPopup from "../PostPopup/PostPopup"
import "./UserProfile.css";

const UserProfile = ({ users }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const { id } = useParams();
    const user = users.find((user) => user.id === Number(id));

    if (!user) {
        return <div>User not found</div>;
    }

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleClosePopup = (e) => {
        console.log('pop close triggered..')
        setSelectedPost(null)
    }

    return (
        <div className="user-profile">
            <h1>Pofile Page</h1>
            <div className="go-back-button">
                <Link to="/">
                    <button>Back</button>
                </Link>
            </div>
            <div className="user-details">
                <div className="user-row">
                    <div className="user-column">
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Catch phrase: {user.catchPhrase}</p>
                    </div>
                    <div className="user-column">
                        <p>Address: {user.address}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                </div>
            </div>

            <div className="user-posts">
                {user.posts.map((post) => (
                    <div key={post.id} className="post-wrapper">
                        <Post post={post} onClick={handlePostClick} />
                    </div>
                ))}
            </div>
            {selectedPost && (
                <PostPopup post={selectedPost} onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default UserProfile;
