import React from 'react';
import {getLugares} from '../api/LugaresData.js';
import LugaresCard from "./LugaresCard.js"

class Lugares extends React.Component {
  state = {
    lugares: []
  };

  async componentDidMount() {
  try {
    const res = await getLugares();
    this.setState({ lugares: res});
    console.log(res)
  } catch (error) {
    console.log(error)
  }
  }

  render() {
    return (
      <div className="lugaresFlex">
        {this.state.lugares.map(lugares => (
         <LugaresCard key={lugares._id} {...lugares } />
        ))}
      </div>
    );
  }
}

export default Lugares;
