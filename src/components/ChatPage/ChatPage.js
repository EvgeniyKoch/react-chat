import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';
import ChatHeader from '../ChatHeader';
import Chat from '../Chat';

import { messages } from '../../mock-data';

export default class ChatPage extends React.Component {
  static propTypes = {
    fetchAllChats: PropTypes.func,
    fetchMyChats: PropTypes.func,
    chats: PropTypes.array,
  }

  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;
    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ]);
  }

  render() {
    const { chats } = this.props;
    console.log(chats);
    return (
      <React.Fragment>
        <ChatHeader />
        <Sidebar chats={chats} />
        <Chat messages={messages} />
      </React.Fragment>
    );
  }
}
