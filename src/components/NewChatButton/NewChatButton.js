import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
});

const NewChatButton = ({ classes }) => (
  <Button
    variant="fab"
    color="primary"
    className={classes.newChatButton}
  >
    <AddIcon />
  </Button>
);

NewChatButton.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(NewChatButton);
