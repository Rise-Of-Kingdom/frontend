import React, { Component } from 'react';
import Navigation from '../components/Navigation';

export default class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navigation />
                </header>

                <section>
                    <div>
                        <h2>Top Alliances</h2>
                    </div>
                </section>

                <footer></footer>
            </div>
        );
    }
}
