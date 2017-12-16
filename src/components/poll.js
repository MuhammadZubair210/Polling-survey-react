import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

class Poll extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      data: []
    }
  }

  getextracted(ev) {
    this.props.match.params.id = ev;
    console.log(ev)
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const childRef = rootRef.child('votingdetails');
    let arrData = [];
    childRef.on('value', snap => {
      arrData = [];
      snap.forEach(ev => {
        let obj = ev.val();
        obj.id = ev.key;
        arrData.push(obj)
        this.setState({ data: arrData });
        console.log(this.state.data)
      });
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Poll works</h1>
        </header>
        <ul>
          {this.state.data.map((val, ind) => {
            return [
              <li idd={val.id} key={ind}>
                <div class="card">
                  <div class="card-block">
                    <h4 class="card-title">
                      <Link to={'/singlepoll/' + val.id}>{val.poll}</Link>
                    </h4>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </li>
            ]
          })}
        </ul>
      </div>
    );
  }
}

export default Poll;
