import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    sendEmail() {
        this.props.history.push('/poll');
    }
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome To the Polling APP.</h1>
                <button className="btn btn-success" onClick={this.sendEmail.bind(this)}>click to move on</button>

            </div>
        );
    }
}

export default Home;
