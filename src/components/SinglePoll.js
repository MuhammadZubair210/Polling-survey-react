import React, { Component } from 'react';
import firebase from 'firebase';
import Poll from './poll';

class SinglePoll extends Component {
    obj;
    id = this.props.match.params.id;
    objj;
    obdj={};
    constructor(props) {
        super(props);
        console.log(props)



        this.state = {
            data: {},
            options: {},
            opt1: 0,
            opt2: 0,
            opt3: 0,
            opt4: 0
        }

        const rootReff = firebase.database().ref();
        // let id = this.props.match.params.id;
        const childReff = rootReff.child('votes/' + this.id);
        let arrData = [];
        childReff.on('value', snap => {
            arrData = [];
            this.objj = snap.val();
            console.log(this.objj)
            if (this.objj != null) {
                this.setState({
                    options: this.objj,
                    opt1: this.objj.opt1,
                    opt2: this.objj.opt2,
                    opt3: this.objj.opt3,
                    opt4: this.objj.opt4
                })
            }
        });
    }

    componentDidMount() {
        const rootReff = firebase.database().ref();
        let id = this.props.match.params.id;
        const childRef = rootReff.child('votingdetails/' + id);
        let arrData = [];
        childRef.on('value', snap => {
            arrData = [];
            let obj = snap.val();
            this.setState({ data: obj });
        });
    }

    getValue(ev) {
        console.log(ev.target.id)
        let a = ev.target.id;
        this.setState({ [ev.target.id]: ev.target.value })
        const rootRef = firebase.database().ref();
        let id = this.props.match.params.id;
        let abc = ++(ev.target.value);
        const childRef = rootRef.child('votes/' + id).update({ [ev.target.id]: abc });
    }

    ViewResults() {
        this.props.history.push('/results/' + this.id);
    }

    render() {
        console.log(this.state.data)
        console.log(this.state.opt1)
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Single Poll component</h1>
                </header>
                <h1>{this.state.data.question}</h1>
                <ul>
                    <li><input type="radio" id="opt1" value={this.state.opt1} onChange={this.getValue.bind(this)} />{this.state.data.opt1}</li>
                    <li><input type="radio" id="opt2" value={this.state.opt2} onChange={this.getValue.bind(this)} />{this.state.data.opt2}</li>
                    <li><input type="radio" id="opt3" value={this.state.opt3} onChange={this.getValue.bind(this)} />{this.state.data.opt3}</li>
                    <li><input type="radio" id="opt4" value={this.state.opt4} onChange={this.getValue.bind(this)} />{this.state.data.opt4}</li>
                </ul>

                <button className="btn btn-success" onClick={this.ViewResults.bind(this)}></button>
            </div>
        );
    }
}

export default SinglePoll;
