import React from 'react';
import Inbox from '../components/inbox';
import Message from '../components/message';

function InboxPage(props) {
  return (
    <main>
      <Inbox
        messages={props.messages}
        handleClick={props.handleMessageClick}
      />
      <Message message={props.selectedMessage} />
    </main>
  );
}

export default InboxPage;
