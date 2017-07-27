/*
  importando o React (obrigatório)
  -----------------------------------------
*/
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';


/*
  Estilos (CSS)
  -----------------------------------------
*/
// CSS do app
//import './App.css';

// CSS do grid
//import './css/flexboxgrid.css';


/*
  Importando o tema Material-ui
  -----------------------------------------
*/

// Tema base
//import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Cores
import {
  indigo500, red500, purple500, greenA200, green500, pinkA200
} from 'material-ui/styles/colors';



/*
  Importando componentes
  -----------------------------------------
*/

// Componentes do Material UI

import AppBar from 'material-ui/AppBar';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';

import ContentAdd from 'material-ui/svg-icons/content/add';

// Componentes próprios
import photo from './images/photo.jpg';
import MainNavigator from './components/MainNavigator';








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
            <MainNavigator width="260" open={this.state.drawerAberto} />

            <div id="main-content">


              {/* AppBar com: IconButton */}
              <AppBar
                title="Highest page title"
                style={{background: 'transparent'}}
                iconElementLeft={<IconButton><i className="material-icons">keyboard_backspace</i></IconButton>}
                iconElementRight={<IconButton onTouchTap={this.abreFechaDrawer}> <i className="material-icons">menu</i> </IconButton>}
                />


            {/* Card com: CardMedia, CardTitle, CardText */}

              
              <Card
                style={{
                      marginTop: '-4em',
                }}
                zDepth={5}
                >

                  <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    overlayContentStyle={{background: purple500}}
                  >
                  <img
                  src={photo}
                  alt="Foto de perfil" className="img-responsive"
                  style={{}}
                  />
                  </CardMedia>

                  <FloatingActionButton secondary={true} style={estiloFab}>
                    <ContentAdd color={indigo500} />
                  </FloatingActionButton>

                  <CardTitle title="Card title" subtitle="Card subtitle" />

              
                </Card>

                {/* Card com: CardText, h2 e p */}

                <Card zDepth={1}>
                  <CardText>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p>
                      promDonec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </p>
                    <p>
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      promDonec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    </p>
                    <p>
                      promDonec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </p>
                    <p>
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      promDonec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    </p>
                  </CardText>
                </Card>






            </div>

      </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
