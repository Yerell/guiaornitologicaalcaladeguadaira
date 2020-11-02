import React from 'react';
import {getPajaros} from '../api/PajarosData.js';
import PajarosCard from "./PajarosCard.js"

class Pajaros extends React.Component {
  state = {
    pajaros: []
  };

  async componentDidMount() {
  try {
    const res = await getPajaros();
    this.setState({ pajaros: res});
    console.log(res)
  } catch (error) {
    console.log(error)
  }
  }

  render() {
    return (
      <div className="pajarosFlex">
        {this.state.pajaros.map(pajaro => (
         <PajarosCard key={pajaro._id} {...pajaro } />
        ))}
      </div>
    );
  }
}

export default Pajaros;
