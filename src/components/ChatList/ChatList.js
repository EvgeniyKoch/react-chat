import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import ChatListItem from '../ChatListItem';

const styles = () => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
});

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatsList}>
    {chats && chats.map((chat, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ChatListItem key={index} {...chat} />
    ))}
  </List>
);

ChatList.propTypes = {
  classes: PropTypes.object,
  chats: PropTypes.array,
};

export default withStyles(styles)(ChatList);
