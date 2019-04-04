import React from 'react';
import PropTypes from 'prop-types';

import MUIAvatar from 'material-ui/Avatar';

import getColor from '../../utils/colors-from';
import titleInitials from '../../utils/title-initials';

const Avatar = ({ colorFrom, children, ...rest }) => (
  <MUIAvatar style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(children)}
  </MUIAvatar>
);

Avatar.propTypes = {
  colorFrom: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Avatar;
