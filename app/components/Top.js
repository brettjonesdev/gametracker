import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default class Top extends React.Component {
    render() {
        return (
            <div>
                <header className="page-header">
                    <h1>NBA GameTracker</h1>
                </header>
                <Nav />
                <article>
                    Select a game or something
                </article>
                <Footer />
            </div>
        );
    }
}
