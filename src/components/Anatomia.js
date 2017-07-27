import React, { Component } from 'react';
import Container from './Container';

import Anatomia0 from './img/anatomia-das-telas-00.png';
import Anatomia1 from './img/anatomia-das-telas-01.png';
import Anatomia2 from './img/anatomia-das-telas-02.png';
import Anatomia2a from './img/anatomia-cabecalho.png';
import Anatomia3 from './img/anatomia-das-telas-03.png';
import Anatomia4 from './img/anatomia-das-telas-04.png';


class Anatomia extends Component {

	

render() {



    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Definições gerais" subTitulo="Anatomia das telas">

          <p>A seguir, você pode conferir a anatomia de uma tela típica do Portal de Compras, que é, basicamente, constituída de 
             3 macro-regiões.
          </p>

          <figure className="responsive">
          	<img alt="" src={Anatomia0}  />
          </figure>

          <h2>Drawer de navegação</h2>
          <p>A navegação global do sistema acontece por aqui.</p>
          <p>Este componente é feito a partir dos componentes 
          <a href="http://www.material-ui.com/#/components/paper">Paper</a>
           e <a href="http://www.material-ui.com/#/components/drawer">Drawer</a>, constantes na boblioteca de componentes do Material-UI.</p>
          <figure className="responsive">
          	<img alt="" src={Anatomia1} />
          </figure>


          <h2>Cabeçalho da aplicação</h2>
          <p>Este cabeçalho deve estar presente em todas telas (não modais)</p>

          <figure className="responsive">
          	<img alt="" src={Anatomia2} />
          </figure>
          <p>O cabeçalho, por sua vez, é composto de 3 elementos:</p>

			<ol>          
				<li>
					<p><b>Título de primeiro nível.</b> Geralmente, o nome do módulo;</p>
				</li>
				<li>
					<p><b>Nome da tela.</b> Deve ser a última expressão do breadcrumb;</p>
				</li>
				<li>
					<p><b>Botão hamburger.</b> Usado para abrir ou fechar o Drawer de navegação;</p>
					<p>É feito a partir do componente 
					<a href="http://www.material-ui.com/#/components/app-bar">App bar</a>
					</p>
					<code>
						<pre>
						{`
<AppBar 
  title={this.props.tituloGeral} 
  zDepth={0} 
  onLeftIconButtonTouchTap={this.props.toggleDrawer} 
  className="app-bar" />
						`}
						</pre>
					</code>
				</li>
			</ol>
          
          <figure className="responsive">
          	<img alt="" src={Anatomia2a} />
          </figure>

          <h2>Container principal</h2>
          <p>É apenas um envólucro que abrigará o paper princial. Observe que ele possui 
          um distanciamento (padding) em todos os campos</p>

          <figure className="responsive">
          	<img alt="" src={Anatomia3} />
          </figure>

          <h2>Paper principal</h2>
          <p>É aqui que a aplicação exibe os componentes principais do sistema.</p>
          Todos os formulários, tabelas e demais elementos interativos estarão inseridos dentro 
          do componente <a href="http://www.material-ui.com/#/components/paper">Paper</a>.

          <figure className="responsive">
          	<img alt="" src={Anatomia4} />
          </figure>
          

        </Container>    
    );
  }
}



export default Anatomia;
