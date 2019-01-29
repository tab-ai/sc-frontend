import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DashboardGrid from './DashboardGrid'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class DashboardPost extends React.Component {
  render() {
    const { classes } = this.props;

    if (!this.props.data) return null;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.props.data.map((dev, i) => {
            return (<DashboardGrid
              bt_id={dev.bt_id}
              address={dev.address}
              temp={dev.temp}
              bpm={dev.bpm}
              battery={dev.battery}
              time={dev.time}
              pk={dev.pk}
              key={i}
            />);
          })}
        </Grid>
      </div>
    );
  }
}

DashboardPost.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DashboardPost);
