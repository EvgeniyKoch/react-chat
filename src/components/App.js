import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> e1084829e5508346e1a58416947399804308ec30

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

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
