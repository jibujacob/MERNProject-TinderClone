import React from 'react'

import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

import "../styles/Header.css";
import logo from "../images/Tinder-Emblem.png";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon 
                    className="header_icon" 
                    fontSize="large" />
            </IconButton>

            <img className="header_logo" 
                src={logo}
                alt="Tinder Clone Logo"
            />

            <IconButton>
                <ForumIcon 
                    className="header_icon"
                    fontSize="large"
                />
            </IconButton>


        </div>
    )
}

export default Header;
