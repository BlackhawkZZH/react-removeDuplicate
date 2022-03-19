import React, { Component } from 'react';
import './style.css';

class RmvDuplicate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retrive: false,
      numList: this.props.numList,
    };
  }

  rmvHandeler = () => {
    if (this.state.retrive) {
      this.setState({
        retrive: false,
        numList: this.props.numList,
      });
      return;
    }
    let handeler = new Set();
    this.state.numList.forEach((elem) => {
      handeler.add(elem);
    });
    handeler = Array.from(handeler);
    this.setState({
      retrive: true,
      numList: handeler,
    });
  };

  render() {
    return (
      <div>
        {this.state.numList.map((elem, i) => {
          return (
            <li onClick={() => this.rmvHandeler()} key={i}>
              {elem}
            </li>
          );
        })}
      </div>
    );
  }
}

class ShowNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numList: [1, 23, 5, 1, 4, 5, 12],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {console.log(this.state.numList)}
          <RmvDuplicate numList={this.state.numList} />
        </ul>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <ShowNum />
    </div>
  );
}
