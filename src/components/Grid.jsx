import React, { Component } from 'react';
import Container from './Container';
import ImagemGrid from './img/grid.png';


class Grid extends Component {



render() {



    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Componentes" subTitulo="Grids">

          <p>
          	Grid é uma malha que divide a tela ​em partes proporcionais e possibilita ​a distribuição do conteúdo de forma​ uniforme,
						proporcionando equilíbrio visual e estrutural.
						Construir um Design Responsivo se torna muito mais fácil se ele for apoiado em um Grid Flexível.
          </p>

					<figure className="responsive">
						<img alt="" src={ImagemGrid} />
					</figure>

					<p>O grid responsivo é baseado na junção de linhas (Row) e colunas (Col).
						As colunas possuem diferentes moificadores que determinam quantos "espaços" elas irão ocupar na tela.
					Em geral, os grids possuem sempre 12 colunas.</p>

					<p>Os modificadores responsivos permitem especificar diferentes tamanhos de colunas, deslocamentos, alinhamento e
						distribuição em larguras de exibição de xs, sm, md & lg, onde:</p>

						<ul>
							<li>XS = Extreme Small (telas do tamanho de smartphones)</li>
							<li>SM = Small (telas do tamanho de tablets)</li>
							<li>MD = Medium (telas do tamanho de desktops médios)</li>
							<li>LG = Large (telas maiores que 1080 pixels)</li>
						</ul>


          <h2>Quando usar</h2>
          <p>Grids são úteis para dividirem a tela em uma ou mais colunas.
						É importante trabalhar a resposividade usando o modificador adequado para cada tamanho de tela.</p>


          <h2>Implementação</h2>

				<p>Para ter acesso à documentação completa, visite:</p>
				<p><a href="http://roylee0704.github.io/react-flexbox-grid/">http://roylee0704.github.io/react-flexbox-grid/</a></p>

			<code>
				<pre>
			{`
<Row>
  <Col xs={12} sm={3} md={2} lg={1} />
  <Col xs={6} sm={6} md={8} lg={10} />
  <Col xs={6} sm={3} md={2} lg={1} />
</Row>
			`}
				</pre>
			</code>



        </Container>
    );
  }
}



export default Grid;
