import React from 'react';
import Envelope from './icons/envelope';
import Typography from '@material-ui/core/Typography';

function Inbox(props) {
  return props.message ? (
    <Typography>{props.message.content}</Typography>
  ) : <Envelope />;
}

export default Inbox;
