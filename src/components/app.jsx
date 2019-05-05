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

  handleReplyClick = (messageId) => {
    window.alert(messageId);
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
            path={'/new'}
            render={() => <NewMail />}
          />
          <Route
            path={'/reply'}
            render={() => <NewMail />}
          />
          {/* <Route
            render={() => <Redirect to="/" />}
          /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
