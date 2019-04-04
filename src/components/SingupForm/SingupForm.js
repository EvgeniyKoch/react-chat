import React, { Component } from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';

import fetch from 'isomorphic-fetch';

>>>>>>> e1084829e5508346e1a58416947399804308ec30
import { withStyles } from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SignupForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatedPassword: {
      value: '',
      isValid: true,
    },
  };

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
<<<<<<< HEAD
  }

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;
=======
  };

  handleInputChange = (e) => {
    e.persist();
    const { name, value } = e.target;
>>>>>>> e1084829e5508346e1a58416947399804308ec30
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
<<<<<<< HEAD
  }
=======
  };
>>>>>>> e1084829e5508346e1a58416947399804308ec30

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validate()) {
      return;
    }

    const { username, password } = this.state;

    console.log('Sign up:', username.value, password.value);

    fetch('http://localhost:8000/v1/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(e => console.error(e));
  };

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

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
          autoComplete="new-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <TextField
          required
          fullWidth
          label="Repeat password"
          placeholder="Type your username..."
          type="password"
          name="repeatedPassword"
          margin="normal"
          autoComplete="new-password"
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!repeatedPassword.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          {'Signup'}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignupForm);
