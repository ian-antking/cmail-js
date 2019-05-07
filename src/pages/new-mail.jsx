import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../styles/new-mail.scss';

const DIVIDER = `\n\n${'-'.repeat(50)}\n\n`;

class NewMail extends React.Component {
  constructor(props) {
    super(props);
    const messageId = this.props.match.params.id;
    let message;
    if (messageId) message = this.props.messages[messageId - 1];
    this.state = message ? {
      email: {
        author: message.author,
        email: message.email,
        subject: `Re: ${message.subject}`,
        content: `${DIVIDER}${message.content}`,
      },
    } : {
      email: {
        author: 'New Email',
        email: '',
        subject: '',
        content: '',
      },
    };
  }

  handleFormChange = (event) => {
    this.setState({
      email: {
        ...this.state.email,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSendClick = () => {
    this.props.handleSend(this.state.email);
    this.props.history.push('/send');
  };

  render() {
    return (
      <div className="new-message-box">
        <Typography variant="h3">{this.state.email.author}</Typography>
        <div classauthor="address-bar">
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            fullWidth
            value={this.state.email.email}
            onChange={(event) => this.handleFormChange(event)}
            margin="normal"
          />
          <TextField
            id="subject"
            name="subject"
            label="Subject"
            fullWidth
            value={this.state.email.subject}
            onChange={(event) => this.handleFormChange(event)}
            margin="normal"
          />
        </div>
        <div classauthor="content-box">
          <TextField
            id="content"
            name="content"
            multiline
            fullWidth
            autoFocus
            rowsMax={15}
            rows={15}
            value={this.state.email.content}
            variant="outlined"
            onChange={(event) => this.handleFormChange(event)}
            margin="normal"
          />
          <Button
            onClick={() => this.handleSendClick()}
          >
                Send
          </Button>
        </div>
      </div>
    );
  }
}

export default NewMail;
