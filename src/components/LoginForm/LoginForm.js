import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  },
});

class LoginForm extends Component {
  static propTypes = {
    classes: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  }

  handleInputChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { onSubmit } = this.props;

    onSubmit(username.value, password.value);
  }

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          name="username"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your username..."
          type="password"
          name="password"
          margin="normal"
          autoComplete="current-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          {'Login'}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
