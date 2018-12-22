import React, { Component } from 'react';

class NewEntryPage extends Component {
    render() {
        const {category} = this.props
        return(
            <h1>New {category} Entry</h1>
        );
    }
}

export default NewEntryPage