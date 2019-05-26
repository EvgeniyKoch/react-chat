import React from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import PrivateRoute from '../containers/PrivateRoute';

import { WelcomePage, ChatPage } from '../containers';
import history from '../utils/history';

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
  <Router history={history}>
    <div className={classes.root}>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <PrivateRoute path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
