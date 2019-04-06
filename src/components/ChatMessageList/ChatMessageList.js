import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import ChatMessage from '../ChatMessage';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
});

class ChatMessageList extends Component {
  static propTypes = {
    classes: PropTypes.object,
    messages: PropTypes.array,
  }

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    // eslint-disable-next-line react/no-string-refs
    const { messagesWrapper } = this.refs;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      // eslint-disable-next-line react/no-string-refs
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((message, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ChatMessage key={index} {...message} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
