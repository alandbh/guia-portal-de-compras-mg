import React, { Component } from 'react';
import Container from './Container';
import ExemploMensagens from './ExemploMensagens';
import ModalConfirmacao from './img/modal-confirmacao.png';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class Mensagens extends Component {



render() {



    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Comportamento" subTitulo="Mensagens">

          <p>
          	Trata-se de qualquer tipo de mensagem que os usuários precisam ou
            querem ver à medida que usam o sistema.
          </p>


          <figure className="responsive">
            <ExemploMensagens />
          </figure>

          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Erro</b></td>
                <td>Alerta usuários de um problema que já ocorreu. O erro pode ter acontecido em decorrência de uma ação do usuário ou por um processo interno do sistema.</td>
              </tr>
              <tr>
                <td><b>Sucesso</b></td>
                <td>Informa o usuário que a atividade foi concluída com sucesso. Útil para mostrar que um processo complexo foi concluído com êxito e que não há mais passos a serem executados.</td>
              </tr>
              <tr>
                <td><b>Alerta</b></td>
                <td>Uma mensagem de aviso pode aparecer uma caixa de diálogo modal ou mensagem in loco. Serve para alertar o usuário de uma condição que pode causar um problema no futuro.</td>
              </tr>
              <tr>
                <td><b>Informação</b></td>
                <td>Aparece quando há alguma informação que poderá ser útil para que o usuário desempenhe sua atividade.</td>
              </tr>
              <tr>
                <td><b>Confirmação</b></td>
                <td>Aparecem como uma modal que explica o contexto da operação e pergunta se o usuário deseja prosseguir com uma ação.</td>
              </tr>
              <tr>
                <td><b>Notificação</b></td>
                <td>Mensagens desse tipo, são curtas, meramente informativas e temporárias. Elas aparecem no mesmo instante em que o usuário realiza a ação, ou seja, pressupõe-se que o usuário esteja atento à interface.</td>
              </tr>
            </tbody>
          </table>

          <blockquote>
            <h3>Atenção</h3>
            <p>As mensagens de ERRO e SUCESSO são as mais óbvias. Mas as de ALERTA e INFORMAÇÃO podem se confundir.</p>

<p>As mensagens meramente informativas, que servem apenas de complementação ao que já está sendo exibido na tela devem ser as do tipo INFORMAÇÃO.</p>

<p>Já as mensagens de ALERTA, servem para alertar o usuário sobre alguma consequência que poderá ser acarretada após a execução de algum comando, ou então, uma outra informação crítica que mereça atenção especial.</p>

<p><b>Ex.: <i>"Ao alterar o item 123, o valor geral do estoque será diferente do contrato original"</i></b></p>
          </blockquote>



<h2>Mensagens em tela modal (Dialog)</h2>
  <figure className="responsive">
    <img src={ModalConfirmacao} />
  </figure>
<p>As caixas de diálogo devem ser usadas para informar os usuários sobre uma tarefa específica e podem conter informações críticas, exigir decisões ou envolver várias tarefas. </p>

<p>Mensagens em modais podem conter um ou mais botões. Elas mantêm o foco do usuário até serem fechadas ou até quando uma ação necessária for tomada.</p>

<p><b>Use as modais com moderação porque são interruptivas.</b></p>

<h3>Alguns usos das modais incluem:</h3>

<ul>
  <li><b>Alertas:</b> que demandem uma interrupção urgente que informa sobre uma situação crítica e/ou requer confirmação.</li>
  <li><b>Confirmação:</b> que exigem que os usuários confirmem explicitamente uma escolha.</li>
</ul>






<h2>Redação das mensagens</h2>
<p>As mensagens de exceção devem ajudar os usuários a reconhecer, diagnosticar e recuperar-se de erros;</p>
<p>Devem utilizar uma linguagem clara, simples e de fácil entendimento, oferecendo opções construtivas para solução destes;</p>
<p>A estrutura da mensagem é:</p>

<ol>
  <li>Informar o que deu errado:  <q><b>O arquivo meu_arquivo.abc não pôde ser excluído</b></q></li>
  <li>Informar as causas possíveis: <q><b>Provavelmente, este arquivo deve estar sendo editado e, por isso, não foi possível excluí-lo.</b></q></li>
  <li>Dizer como sair dessa: <q><b>Experimente fechar o programa de edição e tente novamente</b></q>.</li>
</ol>

<h3>Algumas recomendações:</h3>

<ul>
  <li>Use sempre a voz passiva: <q><b>O arquivo <u>não pôde</u> ser excluído...</b></q>;</li>
  <li>Você pode por a culpa no produto: <q><b><u>O sistema não pôde</u> executar sua solicitação</b></q>;</li>
  <li>Não dirija ao usuário diretamente como “<i><b><u>você</u> fez isso ou aquilo</b></i>”. Dessa forma, o usuário pode achar que ele próprio é a causa do problema.</li>
  <li>A ação de confirmação usa verbos descritivos, como: <b>SALVAR, ENVIAR, COMPARTILHAR, ATUALIZAR, EXCLUIR</b> ou <b>CRIAR</b>.</li>
  <li>Evite usar ações vagas para confirmar a ação, tais como: <b>FEITO, OK</b> ou <b>FECHAR</b>.</li>
  <li>A ação de confirmação é desabilitada até que todos os campos obrigatórios na caixa de diálogo sejam atendidos.</li>
</ul>

<h3>Botões de ação</h3>
<p>Modais de confirmação apresentam um conjunto focado e limitado de ações, que geralmente são afirmativas ou negativas.</p>
<p>As ações afirmativas são colocadas no lado direito e continuam o processo. Ações afirmativas podem ser destrutivas, como "Excluir" ou "Remover".</p>
<p>As ações de desistência (negativas) são colocadas diretamente à esquerda das ações afirmativas e retornam o usuário à tela de origem ou ao passo anterior no processo.</p>
<p>O texto de ação negativa ou afirmativa pode ser "Cancelar" / "OK" ou verbos ativos específicos ou frases verbais que indicam o resultado da decisão.</p>


          <h2>Implementação</h2>


			<code>
				<pre>
			{`
import React from 'react';
import Message from './Message';

const ExemploMensagens = () => {
 const  conteudoMensagemDeErro = () => (
    <div>
      <p>O arquivo meu_arquivo.abc não pôde ser excluído.</p>
      <p>Provavelmente, este arquivo deve estar sendo editado e, por isso, não foi possível excluí-lo.</p>
      <p>Experimente fechar o programa de edição e tente novamente</p>
    </div>
  );

  return(
    <div>
      <Message
        type="success"
        title="Sucesso"
        content="O contrato abcd2017 e seus complementos foram aditivados com êxito." />

      <Message
        type="error"
        title="Erro ao excluir o aquivo abc.doc"
        content={conteudoMensagemDeErro()} />

      <Message
        type="alert"
        title="Atenção"
        content="Se o contrato abcd2017 for alterado, seus itens deverão ser realocados." />

      <Message
        type="info"
        title="Dica"
        content="Para facilitar a pesquisa, utilize ( * ) para substituir partes de palavras. Ex.: a pesquisa por ' auto* ' resulta em 'automático', 'automóvel', 'automóveis' etc." />
    </div>
  )
};

export default ExemploMensagens;

			`}
				</pre>
			</code>



        </Container>
    );
  }
}



export default Mensagens;
