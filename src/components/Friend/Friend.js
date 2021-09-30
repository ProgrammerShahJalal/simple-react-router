import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const { name, email, phone, address } = props.friend
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
        </div>
    );
};

export default Friend;