import React from 'react';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


import '../styles/inbox.scss';

function Inbox(props) {
  return (
    <div className="inbox">
      <MenuList>
        {
      props.messages.map(message => {
        return (
          <div key={message._id}>
            <MenuItem
              onClick={() => props.handleClick(message._id)}
            >
              <ListItemText
                primary={message.subject}
                secondary={message.author}
              />
            </MenuItem>
            <Divider />
          </div>
        );
      })
  }
      </MenuList>
    </div>
  );
}

export default Inbox;
