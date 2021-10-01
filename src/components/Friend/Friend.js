import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, email, phone, address, website } = props.friend
    const url = `friend/${id}`
    const histry = useHistory();
    const handleFriendClick = () => {
        histry.push(url)
    }
    return (
        <div className='friend'>
            <h3>Name: {name} {id}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
            <Link to={url}>Visit Me</Link>
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;