import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const [friendId] = useParams()
    const [friend, setFriend] = useState({})
    const histry = useHistory();

    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const handleClick = () => {
        histry.push('/friends');
    }
    return (
        <div>
            <h2>Details of: {friendId}</h2>
            <h4>{friend.name}</h4>
            <h4>{friend.email}</h4>
            <h4>{friend.phone}</h4>
            <h4>{friend.website}</h4>
            <h4>{friend.company?.name}</h4>
            <button onClick="handleClick">See All Friends</button>
        </div>
    );
};

export default FriendDetail;