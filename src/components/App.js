import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import WelcomePage from './WelcomePage';
import ChatPage from './ChatPage';
import configureStore from '../store';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const store = configureStore();

const App = ({ classes }) => (
  <Provider store={store}>
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
