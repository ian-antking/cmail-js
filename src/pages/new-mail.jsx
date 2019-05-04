import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import '../styles/new-mail.scss';

class NewMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFile: null,
      name: props.name,
      email: {
        recipient: '',
        subject: '',
        content: '',
      },
    };
  };

  handleFormChange = (event) => {
    this.setState({
      email: {
        ...this.state.email,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSend = () => {
    
  };

  render() {
    return (
      <div className="new-message-box">
        <Card>
          <CardHeader
            title={this.state.name ? this.state.name : 'New Email'}
          />
          <CardContent>
            <div className="address-bar">
              <TextField
                id="recipient"
                name="recipient"
                type="email"
                label="Email Address"
                value={this.state.email.recipient}
                onChange={(event) => this.handleFormChange(event)}
                margin="normal"
              />
              <TextField
                id="subject"
                name="subject"
                label="Subject"
                value={this.state.email.subject}
                onChange={(event) => this.handleFormChange(event)}
                margin="normal"
              />
            </div>
            <div className="content-box">
              <TextField
                id="content"
                name="content"
                multiline
                fullWidth
                rowsMax={15}
                rows={15}
                value={this.state.email.content}
                variant="outlined"
                onChange={(event) => this.handleFormChange(event)}
                margin="normal"
              />
              <Button
                onClick={() => this.handleSend()}
              >
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default NewMail;
