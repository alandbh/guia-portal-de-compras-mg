import React, { Component } from 'react';
import Container from './Container';
import ModalConfirmacao from './img/modal-confirmacao.png';


class Exclusao extends Component {



render() {



    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Comportamento" subTitulo="Exclusão de itens no sistema">


					<p>Todo comando de exclusão de objetos do sistema, deve ser sucedido por uma mensagem de confirmação.</p>
					<p>Isso significa que o usuário deve sempre confirmar a ação de exclusão antes que o sistema de fato exclua o objeto do banco.</p>

					<figure className="responsive">
					  <img src={ModalConfirmacao} />
					</figure>

					<blockquote>
					  <h3>Atenção</h3>
					  <p>Não confundir a exclusão de um item do sistema com uma simples remoção de um item do contexto (desassociação).</p>
					  <p>Apenas as exclusões mais "graves", que podem acarretar em alguma consequência nas regras de negócio, ou que, dificilmente, poderão ser desfeitas,
					  é que demandam as mensagens de confirmação de exclusão.</p>
					</blockquote>



          <h2>Quando usar</h2>
          <ul>
          	<li>Na exclusão de um item ou objeto de todo o sistema</li>
          	<li>Numa remoção que acarretará numa consequência mais grave para o usuário ou para a regra de negócio</li>
          	<li>Quando a exclusão do item interfere em outros objetos ou pontos do sistema</li>
          </ul>

					<h2>Como usar</h2>
					<p>O botão de exclusão deve ficar na tela de detalhes do objeto, ou seja, <u>não deve ser colocado como ícone na tabela de resultados.</u></p>

        </Container>
    );
  }
}



export default Exclusao;
