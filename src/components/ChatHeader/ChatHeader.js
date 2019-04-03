import React from 'react';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const styles = () => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
});

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        React Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
