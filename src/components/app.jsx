import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: props.messages,
    };
  }

  componentDidMount() {
    console.log(this.state.messages);
  }

  render() {
    return <h1>The system works!</h1>;
  }
}

export default App;
