//importando o React (obrigatório)
import React, { Component } from 'react';

// Tema base
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Cores
import {
  indigo500, red500} from 'material-ui/styles/colors';


// importando os componentes
import Paper  from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';




// Configurando as cores do nosso tema
// Podemos usar qualquer cor importada acima
// Para mais cores, acesse: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    accent1Color: indigo500,
  },

});

// Estilo do paper central que abriga a aplicação
const stylePaperContent = {
  //marginTop: -50,
  minHeight: 150, padding: 20
};

class Container extends Component {

state = {
    drawerOpen: true,
  };




render() {

  return (

    <div id="main-content">

      <AppBar title={this.props.tituloGeral} zDepth={0} onLeftIconButtonTouchTap={this.props.toggleDrawer} className="app-bar" />

      <div className="App-header" style={{backgroundColor: muiTheme.palette.primary1Color}}>
        <h2 style={{paddingLeft: '1rem'}}>{this.props.subTitulo}</h2>
      </div>

      <div className="container-fluid" style={{marginTop: '26px', position: 'relative',  }}>
        <div className="row">
          <div className="col-xs-12">
            <Paper style={stylePaperContent} zDepth={2}>

              <div className="row">
                <div className="col-xs-12">
                  <article>
                   {this.props.children} 
                    
                  </article>
                </div>
              </div>

              

            </Paper>

          </div>
        </div>

      </div>
    </div>
  );
  }
}

export default Container;
