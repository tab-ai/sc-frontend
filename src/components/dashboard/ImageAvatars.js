import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

class ImageAvatars extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return (
    <Grid container justify="center" alignItems="center">
      <Avatar src={this.props.src} className={classes.bigAvatar} />
    </Grid>
    );
  }
}


ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
