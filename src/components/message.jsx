import React from 'react';
import Envelope from './icons/envelope';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import '../styles/message.scss';

function Inbox(props) {
  return (
    <div className="message-box">
      {
        props.message ? (
          <Card>
            <CardHeader
              title={props.message.author}
              subheader={props.message.email}
            />
            <CardContent>

              <Typography
                variant="h6"
              >
                {props.message.subject}
              </Typography>

              <Typography
                variant="body1"
              >
                {props.message.content}
              </Typography>
            </CardContent>
          </Card>
        ) : <Envelope />
      }
    </div>
  );
}

export default Inbox;
