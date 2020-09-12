import React from 'react';
import '../SCSS/Header.scss';
import * as feather from "react-feather";

//Header Component
const Header = () => {
    return (
        <div className='todo-header'>
            <div className='header-side-bar'>
                ☰
            </div>
            <div className='header-title'>
                To Dos
            </div>
            <feather.Search stroke='#ffffff' className='header-searchIcon'/>
        </div>
    )
}
export default Header