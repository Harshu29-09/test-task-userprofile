import React, { useRef, useEffect } from "react";
import "./PostPopup.css";

const PostPopup = ({ post, onClose }) => {
    const popupRef = useRef();

    useEffect(() => {
        const handleDocumentClick = (e) => {
            if (popupRef.current && popupRef.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, [onClose]);

    return (
        <div className="post-popup" ref={popupRef}>
            <div className="post-popup-content">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        </div>
    );
};

export default PostPopup;
