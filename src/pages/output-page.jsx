import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function OutputPage(props) {
  return props.output ? (
    <div className="new-message-box">
      <Typography>{props.output.subject}</Typography>
      <Button>Print</Button>
    </div>
  ) : (
    <div className="new-message-box">
      <Typography variant="h1">Error: Nothing to send</Typography>
    </div>
  );
}

export default OutputPage;
