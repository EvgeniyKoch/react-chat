import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';

import Avatar from '../Avatar';

const styles = theme => ({
  // ...
});

const ChatListItem = ({ classes, title }) => (
  <ListItem button>
    <Avatar colorFrom={title}>{title}</Avatar>
    <ListItemText primary={title} />
  </ListItem>
);

ChatListItem.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
};

export default withStyles(styles)(ChatListItem);
