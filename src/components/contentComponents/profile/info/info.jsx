import React from 'react';
import './info.css'

const Info = () => {
    return (
            <div className="profile__profile">
                <img src="https://i.pinimg.com/236x/85/06/5d/85065dd0aba6a51eb023f029f879b62a.jpg" alt="avatar" className="profile__profile__avatar" />
                <ul className='profile__profile__info'>
                    <li>Nazar</li>
                    <li>age:15</li>
                    <li>birthday: 4 August</li>
                </ul>
            </div>
    );
};

export default Info;