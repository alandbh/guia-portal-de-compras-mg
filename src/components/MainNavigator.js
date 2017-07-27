//importando o React (obrigatório)
import React, { Component } from 'react';

import {
  NavLink,
} from 'react-router-dom'



// importando imagens (logotipo, avatar e p padrao)
import logo from './img/logo.svg';
import patternPortal from './img/patterns/4p.png';


// importando os componentes
import {List, ListItem}             from 'material-ui/List';
import Drawer                       from 'material-ui/Drawer';
import Paper                        from 'material-ui/Paper';
import Subheader                    from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';



const stylePaperDrawer = {
  height: 140,
  width: '100%',
  margin: 0,
  display: 'inline-block',
  backgroundImage: 'url(' + patternPortal + ')',
  alignItems: 'center',
  overflowX: 'hidden',
};


class MainNavigator extends Component {

state = {
    open: false,
    filhoAberto: false,
    page: '',
  };

    handleToggle = () => {
        this.setState({
          open: !this.state.open,
        });
      };

      handleNestedListToggle = (item) => {
        this.setState({
          open: item.state.open,
        });
      };


      aplicaClasseFilho = () => {
        setTimeout( ()=>{
          this.setState({
          filhoAberto: !this.state.filhoAberto,
        })}, 300);

      };

      fechaFilho = () => {

        this.setState({
          filhoAberto: false,
        });
      }


      // componentDidMount(){
      //         browserHistory.listen((event)=>{
      //             let pathname = event.pathname.split("/");
      //             if(pathname != null){
      //               console.log(pathname);
      //                 // this.setState({
      //                 //     page:pathname[1]
      //                 // });
      //             }
      //         });
      //     }


  render() {



    return (
      <div className="main-navigator-container">

            <Drawer width={parseInt(this.props.width)} open={this.props.drawerOpen} containerClassName="main-navigator-content" >
              <Paper style={stylePaperDrawer} zDepth={1} rounded={false} >
                  <div className="row">
                      <div className="col-xs-12">
                          <div className="box">
                              <img
                                src={logo}
                                alt="Logotipo do projeto" className="img-responsive logo"
                                style={{width: 92, marginLeft: 16, marginTop: 16, marginBottom: 0, opacity: 0.7}}
                                />
                          </div>
                      </div>
                  </div>
              </Paper>
              <div style={{borderTop: 'none'}} >
                <List className="menu_lateral">
                  <Subheader>Definições gerais</Subheader>
                  <ListItem>
                    <NavLink activeClassName="active" to="/introducao">Introdução</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink activeClassName="active" to="/anatomia">Anatomia das telas</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink activeClassName="active" to="/cores">Cores</NavLink>
                  </ListItem>
                </List>


                <Divider style={{marginTop: 20}} />
                <List className="menu_lateral">
                  <Subheader>Componentes</Subheader>
                  <ListItem className="listItem">
                    <NavLink activeClassName="active" to="/card">Card</NavLink>
                  </ListItem>
                  <ListItem className="listItem">
                    <NavLink activeClassName="active" to="/grid">Grid</NavLink>
                  </ListItem>
                  <ListItem className="listItem">
                    <NavLink activeClassName="active" to="/lista">Lista</NavLink>
                  </ListItem>
                  <ListItem className="listItem">
                    <NavLink activeClassName="active" to="/tabela">Tabela</NavLink>
                  </ListItem>
                </List>


                <Divider style={{marginTop: 20}} />
                <List className="menu_lateral">
                  <Subheader>Comportamento</Subheader>
                  <ListItem className="listItem">
                    <NavLink activeClassName="active" to="/remocao">Remoção de itens em tabela ou lista</NavLink>
                  </ListItem>
                  <ListItem className="listItem">
                    <NavLink activeClassName="active" to="/exclusao">Exclusão de itens do sistema</NavLink>
                  </ListItem>
                  <ListItem className="listItem">
                    <NavLink activeClassName="active" to="/mensagens">Mensagens</NavLink>
                  </ListItem>

                </List>
              </div>
            </Drawer>

    </div>
    );
  }
}

export default MainNavigator;
