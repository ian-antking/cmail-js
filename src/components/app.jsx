import React from 'react';
import NavBar from './nav-bar';
import { Switch, Route, Redirect } from 'react-router-dom';
import InboxPage from '../pages/inbox-page';
import NewMail from '../pages/new-mail';
import OutputPage from '../pages/output-page';

import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages,
      selectedMessage: null,
      output: null,
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
    const selectedMessage = this.state.messages.find(message => message._id === messageId);
    if (this.state.selectedMessage === selectedMessage) {
      this._selectMessage();
    } else {
      this._selectMessage(selectedMessage);
    }
  };

  handleSendClick = (message) => {
    this.setState({
      output: message,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <InboxPage
                {...props}
                messages={this.state.messages}
                selectedMessage={this.state.selectedMessage}
                handleMessageClick={this.handleMessageClick}
                handleReplyClick={this.handleReplyClick}
              />
            )}
          />
          <Route
            exact
            path={'/new'}
            render={(props) => {
              return (
                <NewMail
                  {...props}
                  message={null}
                  handleSend={this.handleSendClick}
                />
              );
            }}
          />
          <Route
            path={'/reply/:id'}
            render={(props) => {
              return (
                <NewMail
                  {...props}
                  messages={this.state.messages}
                  handleSend={this.handleSendClick}
                />
              );
            }}
          />
          <Route
            path={'/send'}
            render={(props) => {
              return (
                <OutputPage
                  {...props}
                  output={this.state.output}
                />
              );
            }}
          />
          <Route
            render={() => <Redirect to="/" />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
