import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreIcon from 'material-ui-icons/MoreVert';

class ChatMenu extends React.Component {
  static propTypes = {
    activeUser: PropTypes.shape({
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
    }).isRequired,
    disabled: PropTypes.bool.isRequired,
    onLeaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
  };

  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLeaveClick = () => {
    const { onLeaveClick } = this.props;
    this.handleClose();
    onLeaveClick();
  };

  handleDeleteClick = () => {
    const { onDeleteClick } = this.props;
    this.handleClose();
    onDeleteClick();
  };

  render() {
    const { activeUser, disabled } = this.props;
    const { anchorEl } = this.state;

    if (!activeUser.isChatMember) {
      return null;
    }

    return (
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          disabled={disabled}
          onClick={this.handleClick}
        >
          <MoreIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {activeUser.isMember && <MenuItem onClick={this.handleLeaveClick}>Leave</MenuItem>}
          {activeUser.isCreator && <MenuItem onClick={this.handleDeleteClick}>Delete</MenuItem>}
        </Menu>
      </React.Fragment>
    );
  }
}

export default ChatMenu;
