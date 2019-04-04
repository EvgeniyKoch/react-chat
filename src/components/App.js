import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import WelcomePage from './WelcomePage';
import ChatPage from './ChatPage';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const App = ({ classes }) => (
  <Router>
    <div className={classes.root}>
      <Switch>
        <Route path="/(welcome)?" component={WelcomePage} />
        <Route path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default withStyles(styles)(App);
