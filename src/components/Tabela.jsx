import React, { Component } from 'react';
import Container from './Container';
import ImagemTabela from './img/imagem-tabela.png';


class Tabela extends Component {



render() {



    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Componentes" subTitulo="Tabelas">

          	<p>No Portal, as tabelas seguem o mesmo padrão estabelecido na documentação
							do componente <a href="http://allenfang.github.io/react-bootstrap-table/">react-bootstrap-table</a> e
							possuem a seguinte estrutura como mostra a figura abaixo: </p>

						<figure className="responsive">
							<img alt="" src={ImagemTabela} />
						</figure>

<h2>Anatomia</h2>
<h3>1- Título da tabela</h3>
<p>Trata-se do nome do objeto que a tabela está listando. Pode ser precedido de "Lista de <b> &lt;objeto&gt;</b>" ou " <b>&lt;Objetos&gt;</b> cadastrados"</p>

<h3>2- Cabeçalho de coluna</h3>
<p>São os cabeçalhos que podem ser ordenados pelo usuário. Na medida do possível, todas as colunas são ordenáveis, desde que o desempenho não seja comprometido.</p>

<h3>3- Coluna chave</h3>
<p>É a coluna que abriga a informação chave do objeto listado na tabela.
	Geralmente é o que identifica o objeto, como um ID, Código, Matrícula, Nome, CPF, entre outros.
</p>
<p>Cada item desta coluna possui um link que leva para a tela de detalhes do item.</p>

<h3>4- Botão de adição</h3>
<p>O botão de adição de itens na tabela deve ficar imediatamente na parte superior direita, junto da tabela</p>

<h3>5- Visibilidade de colunas</h3>
<p>O botão de visibilidade das colunas fica no canto superior esquerdo da tabela.</p>


          <h2>Quando usar</h2>
					<p>Tabelas são úteis para abrigar dados tabulados um listar informações em grande volume.</p>
					<p>Atenção para os casos em que a tabela pode ser substituída por uma lista simples (<pre className="inline">&lt;List&gt;</pre> e <pre className="inline">&lt;ListItem&gt;</pre>). Geralmente essa situação ocorre quando há apenas um único dado a ser exibido, o que dispensa o uso de mais colunas. </p>


          <h2>Implementação</h2>
					<p>Acesse o site com a documentação completa:</p>
					<p><a href="http://allenfang.github.io/react-bootstrap-table/example.html#basic">http://allenfang.github.io/react-bootstrap-table/example.html#basic</a></p>

			<code>
				<pre>
			{`
var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }...];

ReactDOM.render(
  <BootstrapTable data={products} striped hover>
      <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
  </BootstrapTable>,
  document.getElementById('basic')
);
			`}
				</pre>
			</code>



        </Container>
    );
  }
}



export default Tabela;
