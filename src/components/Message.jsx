import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import IconError from 'material-ui/svg-icons/alert/error';
import IconSuccess from 'material-ui/svg-icons/action/check-circle';
import IconAlert from 'material-ui/svg-icons/alert/warning';
import IconInfo from 'material-ui/svg-icons/action/info-outline';


class Message extends Component {
  state = {
      tipo: 'info',
    };

    render() {
      const { title, content, type } = this.props

      let titulo    = title;
      let conteudo  = content;

      let icon = <IconError />;

      if (type === 'error') {
        icon = <IconError />;
        console.log('-->' + type);
      } else if (type === 'success') {
        icon = <IconSuccess />;
      } else if (type === 'alert') {
        icon = <IconAlert />;
      } else if (type === 'info') {
        icon = <IconInfo />;
      }

      return (
          <div className="msg-container">
            <div className={`msg msg-${type}`}>
              <div className="icon">
                {icon}
              </div>
              <div className="content">
                <h4>{title}</h4>
                {content}
              </div>
            </div>
          </div>
      )
    }
}

export default Message;
