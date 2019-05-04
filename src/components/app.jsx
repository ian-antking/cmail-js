import React from 'react';
import Inbox from './inbox';
import Message from './message';


import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: props.messages,
      selectedMessage: null,
    };
  }

  componentDidMount() {
  }

  _selectMessage(message = null) {
    this.setState({
      selectedMessage: message,
    });
  }

  handleMessageClick = (messageId) => {
    const selectedMessage  = this.state.messages.find(message => message._id === messageId);
    if (this.state.selectedMessage === selectedMessage) {
      this._selectMessage();
    } else {
      this._selectMessage(selectedMessage);
    }
  };

  render() {
    console.log(this.state.selectedMessage);
    return (
      <React.Fragment>
        <header>
          <h1>Cmail</h1>
        </header>
        <main>
          <Inbox
            messages={this.state.messages}
            handleClick={this.handleMessageClick}
          />
          <Message message={this.state.selectedMessage} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;