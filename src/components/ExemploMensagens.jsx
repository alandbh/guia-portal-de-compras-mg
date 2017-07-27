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
