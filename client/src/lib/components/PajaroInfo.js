import React from 'react';
import {getPajaros1} from '../api/PajarosData.js';

class PajaroInfo extends React.Component {
  state = {
    pajaro: null
  };

  async componentDidMount() {
    try {
      const pajaroId = this.props.match.params.id;
      console.log(pajaroId)
      const res = await getPajaros1(pajaroId);
      console.log("hola")
    this.setState({ pajaro: res});
    console.log(res)
  } catch (error) {
    console.log(error)
  }
  }

  render() {
    if (!this.state.pajaro) return null
    const { pajaro } = this.state
    return (
      <section>
        <h2>Nombre: {pajaro.Title} </h2>
        <h2>Nombre Científico: {pajaro.MediaCaption}</h2>
        <h2>Autoría de la imagen: {pajaro.MediaCredit}</h2>
        <h2>Tags: {pajaro.Tags}</h2>
        <h2>Hábitat: {pajaro.Place}</h2>
        <h2>Fuente: {pajaro.SourceURL}</h2>
              </section>
    );
  }
}

export default PajaroInfo;


/*
        <img src= {pajaro.Media} alt={pajaro.Title} width="250" height="250"> </img>
*/