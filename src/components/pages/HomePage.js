import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <h1>Home Page</h1>
                <Link to="/category">
                    <button>New Entry</button>
                </Link>
            </div>
        );
    }
}

export default HomePage