/*
  importando o React (obrigatório)
  -----------------------------------------
*/
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';



/*
  Importando o tema Material-ui
  -----------------------------------------
*/

// Tema base

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Cores
import {
  indigo500, red500
} from 'material-ui/styles/colors';



/*
  Importando componentes
  -----------------------------------------
*/

// Componentes do Material UI


// Componentes próprios




    // This replaces the textColor value on the palette
    // and then update the keys for each component that depends on it.
    // More on Colors: http://www.material-ui.com/#/customization/colors
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: red500,
        accent1Color: pinkA200,
      },

    });


// Detecta se é dispositivo móvel

let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      if (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() != null) {
        return true;
      }
    },
    models: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
};


let estiloFab = {
  marginTop: '-30px', 
  float: 'right', 
  marginRight: '2em'
};



// Necessário para o componente onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/*
  Aqui que começa o componente "pai" que é a aplicação em si
*/
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile.any(),
      drawerAberto: !isMobile.any(),
    };
  }


  // Função que abre e fecha o drawer

  abreFechaDrawer = () => this.setState({drawerAberto: !this.state.drawerAberto});



  render() {
    return (
      <div className={(this.state.drawerAberto ? "menu-open-true App" : "menu-open-false App") + ' ' + (this.state.isMobile ? "is-mobile" : "is-not-mobile")}>


        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="wrapper">
            
            {/* Main navigator */}

            <div id="main-content">


              {/* AppBar com: IconButton */}
              


              {/* Card com: CardMedia, CardTitle, CardText */}

              
              

              {/* Card com: CardText, h2 e p */}



            </div>

      </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
