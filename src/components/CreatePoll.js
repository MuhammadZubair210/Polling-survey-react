import React, { Component } from 'react';
import firebase from 'firebase';
class CreatePoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pollName: '',
            question: '',
            choices: '',
            opt1: '',
            opt2: '',
            opt3: '',
            opt4: ''
        }
    }

    sendEmail() {
        this.props.history.push('/poll');
    }
    getValue(ev) {
        this.setState({ [ev.target.id]: ev.target.value })
    }

    sendData(ev) {
        ev.preventDefault();
        let Dataobj = {
            poll: this.state.pollName,
            question: this.state.question,
            choices: this.state.choices,
            opt1:this.state.opt1,
            opt2:this.state.opt2,
            opt3:this.state.opt3,
            opt4:this.state.opt4
        }
        firebase.database().ref('/').child("votingdetails/").push(Dataobj);
        console.log(Dataobj);
    }

    render() {
        return (
            <div className="container" style={this.divStyle}>
                <form onSubmit={this.sendData.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="pollName">Polling Name</label>
                        <input type="text" className="form-control" onChange={this.getValue.bind(this)} id="pollName" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="opt1">Question</label>
                        <textarea className="form-control" id="question" onChange={this.getValue.bind(this)} rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="opt2">Option 1:</label>
                        <input className="form-control" id="opt1" onChange={this.getValue.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="opt3">Option 2:</label>
                        <input className="form-control" id="opt2" onChange={this.getValue.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="opt4">Option 3:</label>
                        <input className="form-control" id="opt3" onChange={this.getValue.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Option 4:</label>
                        <input className="form-control" id="opt4" onChange={this.getValue.bind(this)} />
                    </div>
                    <button style={this.btnStyle} className="btn btn-info">Save</button>
                </form>
            </div>
        );
    }
}

export default CreatePoll;
