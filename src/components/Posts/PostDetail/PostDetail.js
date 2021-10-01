import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h1>Post detail of {postId}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;