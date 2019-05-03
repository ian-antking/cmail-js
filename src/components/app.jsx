import React from 'react';
import Inbox from './inbox';

import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: props.messages,
    };
  }

  componentDidMount() {
  }

  handleMessageClick = (message) => {
    window.alert(message.subject);
  };

  render() {
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
          <div>
            message area
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
