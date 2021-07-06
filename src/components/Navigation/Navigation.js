import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <header className='nav-header'>
                <h1 className='logo'>ROK Social</h1>

                <input type='checkbox' id='nav-toggle' className='nav-toggle' />
                <nav className='nav-top'>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Kingdoms</a>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <label htmlFor='nav-toggle' className='nav-toggle-label'>
                    <span></span>
                </label>
            </header>
        );
    }
}
