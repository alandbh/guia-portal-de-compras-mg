import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {grey400, green500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="Ações"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);



const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Visualizar relatório de detalhes do material</MenuItem>
    <MenuItem>Consultar Itens de materiais</MenuItem>
    <MenuItem>Consultar grupos</MenuItem>
    <MenuItem>Consultar classes</MenuItem>
    <Divider />
    <MenuItem leftIcon={<Delete />}>Remover item</MenuItem>
  </IconMenu>
);




const ExemploLista = () => (
  <div>
    
    <div>
      <List>
        <Subheader>Materiais encontrados</Subheader>
        <ListItem
          rightIconButton={rightIconMenu}
          secondaryTextLines={2}
        >
          <div className="row">
            <div className="col-xs-3">
              123456789
            </div>
            <div className="col-xs-2">
              <span style={{color: green500}}>Ativo</span>
            </div>
            <div className="col-xs-7">
              Caneta Esferográfica com ponta de Tungstênio Lorem Ipsum Dolor Sit Amet Consectur
            </div>
          </div>
        </ListItem>
        <Divider />

        <ListItem
          rightIconButton={rightIconMenu}
          secondaryTextLines={2}
        >
          <div className="row">
            <div className="col-xs-3">
              123456789
            </div>
            <div className="col-xs-2">
              <span style={{color: green500}}>Ativo</span>
            </div>
            <div className="col-xs-7">
              Caneta Esferográfica com ponta de Tungstênio Lorem Ipsum Dolor Sit Amet Consectur
            </div>
          </div>
        </ListItem>
        <Divider />

        <ListItem
          rightIconButton={rightIconMenu}
          secondaryTextLines={2}
        >
          <div className="row">
            <div className="col-xs-3">
              <span className="riscado">123456789</span>
            </div>
            <div className="col-xs-2">
              <span style={{color: grey400}}>Inativo</span>
            </div>
            <div className="col-xs-7">
              Caneta Esferográfica com ponta de Tungstênio Lorem Ipsum Dolor Sit Amet Consectur
            </div>
          </div>
        </ListItem>
        <Divider />

        <ListItem
          rightIconButton={rightIconMenu}
          secondaryTextLines={2}
        >
          <div className="row">
            <div className="col-xs-3">
              123456789
            </div>
            <div className="col-xs-2">
              <span style={{color: green500}}>Ativo</span>
            </div>
            <div className="col-xs-7">
              Caneta Esferográfica com ponta de Tungstênio Lorem Ipsum Dolor Sit Amet Consectur
            </div>
          </div>
        </ListItem>
        <Divider />

     

      </List>
    </div>
  </div>
);

export default ExemploLista;