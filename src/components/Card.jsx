import React, { Component } from 'react';
import Container from './Container';


class Card extends Component {

	

render() {



    return (
        <Container toggleDrawer={this.props.toggleDrawer} tituloGeral="Componentes" subTitulo="Cards">

          <p>
          	Um cartão é, basicamente, composto por um <i>Paper</i> que serve como ponto de entrada para informações mais 
          	detalhadas. Os <i>cards</i> podem conter uma foto, texto e um link sobre um único assunto. 
          	Eles podem exibir conteúdo e elementos de tamanho variável ou fixo. aaaaa
          </p>

          <figure className="responsive">
            <img src="https://storage.googleapis.com/material-design/publish/material_v_11/assets/0Bzhp5Z4wHba3MXJBM2FCcDVscjg/components_cards34.png" alt="" />
          </figure>

         

          <h2>Quando usar</h2>
          <p>Os cards são um meio conveniente de exibir conteúdo composto por diferentes elementos. Eles também são adequados para exibir elementos de tamanho variado, como item com descrição ou fotos com legendas.</p>
          
          <p>Use um card para mostrar conteúdo que:</p>

          <ul>
            <li>Se for uma coleção, contempla dados variados como textos, images, videos.</li>
          	<li>Não demandam uma comparação direta (quando um usuário não tem que comparar um card com outro).</li>
          	<li>Possui um conteúdo de texto longo, como uma descrição ou comentário.</li>
          	<li>Contém conteúdo interativo como, botões de ação (como excluir, editar)</li>
          	<li>Poderia ser apresentado de outra forma, como um grid list, mas precisaria exibir mais conteúdo</li>
          </ul>

					<code>
						<pre>
						{`
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

 ...

<Card>
    <CardHeader
      title="Title goes here"
      subtitle="Subtitle here"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
						`}
						</pre>
					</code>
			
 

        </Container>    
    );
  }
}



export default Card;
