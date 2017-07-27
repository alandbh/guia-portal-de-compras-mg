import React, { Component } from 'react';
import Container from './Container';
class Inicio extends Component {

  render() {

    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Definições gerais" subTitulo="Introdução">
          <h2>Para que serve este guia?</h2>
          <p>Este guia tem como objetivo normatizar os estilos e alguns comportamentos de interface de uso para o Portal de Compras.</p>
          <p>Trata-se de um documento em constante evolução, sendo que, quaisquer sugestões são bem-vindas.</p>
          <p>No menu lateral, você pode navegar pelas seções do documento que é composto por duas seções principais:</p>
          <ol>
          	<li>Design</li>
          	<li>Componentes</li>
          	<li>Comportamento</li>
          </ol>
        </Container>
    );
  }
}

export default Inicio;
