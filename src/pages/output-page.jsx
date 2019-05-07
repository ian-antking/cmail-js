import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../styles/output-page.scss';

function OutputPage(props) {
  return props.output ? (
    <div className="output-box">
      <Button
        fullWidth
        onClick={() => window.print()}
      >
        Click Here to Print
      </Button>
      <Typography variant="h6">{`To: ${props.output.email}`}</Typography>
      <Typography variant="h6">{`Subject: ${props.output.subject}`}</Typography>
      <Typography variant="h6">Message:</Typography>
      <pre>{props.output.content}</pre>
    </div>
  ) : (
    <div className="new-message-box">
      <Typography variant="h1">Error: Nothing to send</Typography>
    </div>
  );
}

export default OutputPage;
