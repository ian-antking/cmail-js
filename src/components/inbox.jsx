import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/inbox.scss';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Inbox(props) {
  return (
    <div className="inbox">
      {
      props.messages.map(message => {
        return (
          <Card
            key={message._id}
            onClick={() => props.handleClick(message._id)}
          >
            <CardContent>
              <Typography>
                {message.subject}
              </Typography>
              <Typography>
                {message.author}
              </Typography>
            </CardContent>
          </Card>
        );
      })
  }
    </div>
  );
}

export default withStyles(styles)(Inbox);
