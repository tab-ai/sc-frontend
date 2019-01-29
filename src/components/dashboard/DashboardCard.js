// Dashboard Card

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TempLineChart from './TempLineChart';
import BpmBarChart from './BpmBarChart';
import ImageAvatars from './ImageAvatars';
import Divider from '@material-ui/core/Divider';
import Battery from './Battery'


const styles = theme => ({
  card: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  battery_green: {
    fontSize: 30,
    color: green[800],
    '&:hover': {
      color: green[800],
    },
  },

  battery_red: {
    color: red[500],
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    maxHeight: 300,
  },
});


class DashboardCard extends React.Component {
  state = {
    expanded: false,
    open: false,
    count: 130,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const card_id = "ID : " + this.props.bt_id.replace(/[^0-9]/g,'');
    const avatar_src = "/static/icons/" + this.props.pk + ".png"

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <ImageAvatars src={avatar_src} />
          }
          action={
             <Battery value={this.props.battery} />
          }
          title={card_id}
          subheader={
            <Typography className={classes.pos} color="textSecondary">
              Device  : {this.props.bt_id} <br />
              Address : {this.props.address}
            </Typography>
          }
        />
        <Divider />
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper>
                <TempLineChart bt_id = {this.props.bt_id} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <BpmBarChart bt_id = {this.props.bt_id} />
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

DashboardCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardCard);
