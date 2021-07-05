import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <h1 className='logo'>ROK Social</h1>

                <input type='checkbox' id='nav-toggle' className='nav-toggle' />
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <label htmlFor='nav-toggle' className='nav-toggle-label'>
                    <span></span>
                </label>
            </div>
        );
    }
}
