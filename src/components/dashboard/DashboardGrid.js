import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DashboardCard from "./DashboardCard"


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


class DashboardGrid extends React.Component {

  render() {

    return (
      <Grid item xs={12} sm={6}>
        <DashboardCard
          bt_id = {this.props.bt_id}
          address = {this.props.address}
          battery = {this.props.battery}
          pk = {this.props.pk}
        />
      </Grid>
    );
  }
}


DashboardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardGrid);
