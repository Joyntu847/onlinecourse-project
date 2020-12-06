import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
        <div>
            <span className="icon"><FontAwesomeIcon icon={faLaptopCode} /></span>My<span className="online">Online</span>Class
        </div>
    </div>
    );
};

export default Header;