import React, { Component } from 'react';
import firebase from 'firebase';

class Results extends Component {
    id;
    constructor(props) {
        super(props);
        this.id = this.props.match.params.results



        this.state = {
            data: {},
            data1: {}
        }

    }

    componentWillMount() {
        const rootReff = firebase.database().ref();
        const childReff = rootReff.child('votingdetails/' + this.id);
        let arrData = [];
        childReff.on('value', snap => {
            arrData = [];
            let obj = snap.val();
            console.log(obj)
            this.setState({ data1: obj });
        });

    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        const childRef = rootRef.child('votes/' + this.id);
        let arrData = [];
        childRef.on('value', snap => {
            arrData = [];
            let obj = snap.val();
            console.log(obj)
            this.setState({ data: obj });
        });
    }

    render() {
        console.log(this.state.data)
        console.log(this.state.data1)
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">{this.state.data1.question}</h1>
                </header>
                <div className="card"
                    style={{ marginTop: '4%' }}>
                    <h2 class="subheading">polling results</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <h1><strong><span>{this.state.data1.opt1}:</span></strong><span>&nbsp;</span>{this.state.data.opt1}</h1>
                            </div>
                            <div className="col-lg-3">
                                <h1><strong><span>{this.state.data1.opt2}:</span></strong><span>&nbsp;</span>{this.state.data.opt2}</h1>
                            </div>
                            <div className="col-lg-3">
                                <h1><strong><span>{this.state.data1.opt3}:</span></strong><span>&nbsp;</span>{this.state.data.opt3}</h1>

                            </div>
                            <div className="col-lg-3">
                                <h1><strong><span>{this.state.data1.opt4}:</span></strong><span>&nbsp;</span>{this.state.data.opt4}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;