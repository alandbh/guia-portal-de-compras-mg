//importando o React (obrigatório)
import React, { Component } from 'react';







class AnimaEntrada extends Component {

state = {
    open: false,
  };



  render() {



    return (
      <div className="animatedContainer" style={{overflow: 'hidden', marginTop: '-5px'}}>
        <div className={this.props.filhoAberto?'aberto linhaPai':'linhaPai'}></div>
        <div className="animated slideInDown">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default AnimaEntrada;
