import React, { Component } from 'react';

export default class Navbar extends Component {

    render(){
        return(

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 ml-1">
            <a className="navbar-brand ml-1" href="/">THE NEWS HUB</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/top-news-headlines">Top Headlines</a>
                </li>
                
                </ul>

            </div>
            </nav>

        )
    }

}