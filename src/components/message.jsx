import React from 'react';
import Envelope from './icons/envelope';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../styles/message.scss';

function Inbox(props) {
  const handleReplyClick = (messageId) => {
    props.history.push(`/reply/${messageId}`);
  };

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
              <div className="message-text">
                <pre>
                  {props.message.content}
                </pre>
              </div>
              <div className="message-controls">
                <Button
                  onClick={() => handleReplyClick(props.message._id)}
                >
                  Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="svg-box">
            <Envelope />
          </div>
        )
      }
    </div>
  );
}

export default Inbox;
