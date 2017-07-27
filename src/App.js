import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

/*
  Estilos (CSS)
  -----------------------------------------
*/

  // CSS do app
  import './App.css';

  // CSS do grid
  import './css/flexboxgrid.css';


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
    indigo500, red500 } from 'material-ui/styles/colors';


/*
  Importando componentes
  -----------------------------------------
*/

  // Componentes próprios
  //import AppRoutes from './components/AppRoutes';
  import MainNavigator from './components/MainNavigator';



/*
  Páginas
  -------------------------
*/
  import Inicio        from './components/Inicio';
  import Cores         from './components/Cores';
  import Anatomia      from './components/Anatomia';
  import Card          from './components/Card';
  import Grid          from './components/Grid';
  import Lista         from './components/Lista';
  import Tabela        from './components/Tabela';
  import Mensagens     from './components/Mensagens';
  import Exclusao     from './components/Exclusao';
  import Remocao     from './components/Remocao';




// Configurando as cores do nosso tema
// Podemos usar qualquer cor importada acima
// Para mais cores, acesse: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    accent1Color: indigo500,
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


injectTapEventPlugin();





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile.any(),
      drawerOpen: !isMobile.any(),
      menuItem: ''
    };
  }

  handleToggle  = () => this.setState({drawerOpen: !this.state.drawerOpen});



  render() {


    const telaInicio = () => (
      <Inicio toggleDrawer={this.handleToggle} />
    );

    const telaCores = () => (
        <Cores toggleDrawer={this.handleToggle}/>
    );

    const telaAnatomia = () => (
        <Anatomia toggleDrawer={this.handleToggle}/>
    );

    const telaCard = () => (
        <Card toggleDrawer={this.handleToggle}/>
    );

    const telaGrid = () => (
        <Grid toggleDrawer={this.handleToggle}/>
    );

    const telaLista = () => (
        <Lista toggleDrawer={this.handleToggle}/>
    );

    const telaTabela = () => (
        <Tabela toggleDrawer={this.handleToggle}/>
    );

    const telaMensagens = () => (
        <Mensagens toggleDrawer={this.handleToggle}/>
    );

    const telaExclusao = () => (
        <Exclusao toggleDrawer={this.handleToggle}/>
    );

    const telaRemocao = () => (
        <Remocao toggleDrawer={this.handleToggle}/>
    );




    return (
      <Router>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={(this.state.drawerOpen ? "menu-open-true App" : "menu-open-false App") + ' ' + (this.state.isMobile ? "is-mobile" : "is-not-mobile")}>
          <div className="wrapper">

          <MainNavigator width="260" drawerOpen={this.state.drawerOpen} />

          <Route exact path="/" component={telaInicio} />
          <Route exact path="/introducao" component={telaInicio} />
          <Route path="/anatomia" component={telaAnatomia}/>
          <Route path="/cores" component={telaCores}/>
          <Route path="/card" component={telaCard}/>
          <Route path="/grid" component={telaGrid}/>
          <Route path="/lista" component={telaLista}/>
          <Route path="/tabela" component={telaTabela}/>
          <Route path="/mensagens" component={telaMensagens}/>
          <Route path="/exclusao" component={telaExclusao}/>
          <Route path="/remocao" component={telaRemocao}/>


          </div>
        </div>
        </MuiThemeProvider>
      </Router>
  )
}
}




export default App
