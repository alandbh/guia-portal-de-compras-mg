import React, { Component } from 'react';
import Container from './Container';


class Cores extends Component {

	
	 // componentWillMount(){
	 // 	console.log('componentDidMount');
	 //    this.props.menuItem
	 // }


	// componentWillReceiveProps(nextProps){
	// 	console.log('componentWillReceiveProps');
	// 	 nextProps.menuItem
	// }

	// atualizaMenu() {
	// 	this.props.menuItem('telaCores')
	// 	console.log('atualizaMenu')
	// }


render() {

	const primarycolordark =   '#D32F2F'
	const primarycolor =        '#F44336'
	const primarycolorlight =  '#FFCDD2'
	const primarycolortext =   '#FFFFFF'
	const accentcolor =         '#448AFF'
	const primarytextcolor =   '#212121'
	const secondarytextcolor = '#757575'
	const dividercolor =        '#BDBDBD'


    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Definições gerais" subTitulo="Cores">
          <h2>Paleta de cores do sistema</h2>

          <div className="pallete group">
            <div className="theme-palette-colors clearfix">
              <div className="theme-palette-color" >
                <div style={{background: primarycolor}} className="theme-palette-color-inner theme-palette-color-inner--white" >
                  <span>Primary color</span>
                  <strong className="ng-binding">{primarycolor}</strong>
                </div>
              </div>
            </div>
            <div className="theme-palette-colors clearfix">
              <div className="theme-palette-color" >
                <div style={{background: primarycolordark}} className="theme-palette-color-inner theme-palette-color-inner--white" >
                  <span>Dark primary color</span>
                  <strong className="ng-binding">{primarycolordark}</strong>
                </div>
              </div>
            </div>

            <div className="theme-palette-colors clearfix">
              <div className="theme-palette-color" >
                <div style={{background: primarycolorlight}} className="theme-palette-color-inner theme-palette-color-inner--white" >
                  <span>Primary color light</span>
                  <strong className="ng-binding">{primarycolorlight}</strong>
                </div>
              </div>
            </div>

            <div className="theme-palette-colors clearfix">
              <div className="theme-palette-color" >
                <div style={{background: primarycolortext}} className="theme-palette-color-inner theme-palette-color-inner--white" >
                  <span>Text / icons</span>
                  <strong className="ng-binding">{primarycolortext}</strong>
                </div>
              </div>
            </div>

            <div className="theme-palette-colors clearfix">
              <div className="theme-palette-color" >
                <div style={{background: accentcolor}} className="theme-palette-color-inner theme-palette-color-inner--white" >
                  <span>Accent color</span>
                  <strong className="ng-binding">{accentcolor}</strong>
                </div>
              </div>
            </div>

            <div className="theme-palette-colors clearfix">
              <div className="theme-palette-color" >
                <div style={{background: primarytextcolor}} className="theme-palette-color-inner white" >
                  <span>Primary text color</span>
                  <strong className="ng-binding">{primarytextcolor}</strong>
                </div>
              </div>
            </div>

            <div className="theme-palette-colors clearfix">
              <div className="theme-palette-color" >
                <div style={{background: secondarytextcolor}} className="theme-palette-color-inner theme-palette-color-inner--white" >
                  <span>Secondary text color</span>
                  <strong className="ng-binding">{secondarytextcolor}</strong>
                </div>
              </div>
            </div>

            <div className="theme-palette-colors clearfix">
              <div className="theme-palette-color" >
                <div style={{background: dividercolor}} className="theme-palette-color-inner theme-palette-color-inner--white" >
                  <span>Divider color</span>
                  <strong className="ng-binding">{dividercolor}</strong>
                </div>
              </div>
            </div>
            
          </div>
          <p>A paleta de cores do Portal inclui cores primárias (Primary) e acentuadas (Accent), além de outras cores complementares
           que podem ser usadas em qualquer tela do sistema. </p>
           <p>O Google Material Design sugere <a href="https://material.io/guidelines/style/color.html#color-color-palette" target="_blank">um conjundo de 500 cores</a> como cores primárias para serem usadas em seus produtos.</p>
           <h3>Implementação</h3>
           <p>Para utilizar as cores no sistema, basta importar cada cor como um componente do Material UI</p>
           <code>
           {"import {cyan500} from 'material-ui/styles/colors';"}
           </code>
           <p>Para saber o nome correto da cor no framework acesse</p>
           <p><a href="http://www.material-ui.com/#/customization/colors">http://www.material-ui.com/#/customization/colors</a></p>

        </Container>    
    );
  }
}



export default Cores;
