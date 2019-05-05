import React from 'react';
import NavBar from './nav-bar';
import { Switch, Route, Redirect } from 'react-router-dom';
import InboxPage from '../pages/inbox-page';
import NewMail from '../pages/new-mail';

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
    const selectedMessage = this.state.messages.find(message => message._id === messageId);
    if (this.state.selectedMessage === selectedMessage) {
      this._selectMessage();
    } else {
      this._selectMessage(selectedMessage);
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <InboxPage
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
