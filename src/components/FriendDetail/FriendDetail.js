import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const [friendId] = useParams()
    const [friend, setFriend] = useState({})
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>Details of: {friendId}</h2>
            <h4>{friend.name}</h4>
            <h4>{friend.email}</h4>
            <h4>{friend.phone}</h4>
            <h4>{friend.website}</h4>
            <h4>{friend.company?.name}</h4>
        </div>
    );
};

export default FriendDetail;