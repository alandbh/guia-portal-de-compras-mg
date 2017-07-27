import React, { Component } from 'react';
import Container from './Container';
import imagemRemocao from './img/remocao.png';


class Remocao extends Component {

render() {



    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Comportamento" subTitulo="Remoção de itens em tabela ou lista">

					<p>É um comando que retira um item de um objeto maior.
						Entretanto, o usuário poderá adicioná-lo novamente, a partir de uma lista com mais itens em que o item removido aparece.</p>
					<p>Neste caso, não é necessária a mensagem de confirmação, mas sim, uma mensagem de <u>notificação</u> (snackbar)</p>

					<figure className="responsive">
					  <img src={imagemRemocao} />
					</figure>

					<blockquote>
					  <h3>Atenção</h3>
					  <p>Não confundir a exclusão de um item do sistema com uma simples remoção de um item do contexto (desassociação).</p>
					  <p>Apenas as exclusões mais "graves", que podem acarretar em alguma consequência nas regras de negócio, ou que, dificilmente, poderão ser desfeitas,
					  é que demandam as mensagens de confirmação de exclusão.</p>
					</blockquote>



          <h2>Quando usar</h2>
          <ul>
          	<li>Na remoção de um item pertencente a um objeto maior</li>
          	<li>Numa remoção que não acarretará numa consequência mais grave para o usuário ou para a regra de negócio</li>
          	<li>Quando a remoção do item não interfere em outros objetos ou pontos do sistema</li>
          </ul>

					<h2>Como usar</h2>
					<p>O botão de exclusão deve ser apresentado como ícone na tabela de resultados.</p>

        </Container>
    );
  }
}



export default Remocao;
