import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import BatteryIcon0 from '@material-ui/icons/BatteryAlert';
import BatteryIcon20 from '@material-ui/icons/Battery20';
import BatteryIcon30 from '@material-ui/icons/Battery30';
import BatteryIcon50 from '@material-ui/icons/Battery50';
import BatteryIcon60 from '@material-ui/icons/Battery60';
import BatteryIcon80 from '@material-ui/icons/Battery80';
import BatteryIcon90 from '@material-ui/icons/Battery90';
import BatteryIcon100 from '@material-ui/icons/BatteryFull';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';



function battery_ui_value(value) {
  if (value >= 95) {
    return 100
  } else if (value >= 90) {
    return 90
  } else if (value >= 75) {
    return 80
  } else if (value >= 60) {
    return 60
  } else if (value >= 45) {
    return 50
  } else if (value >= 30) {
    return 30
  } else if (value >= 15) {
    return 20
  } else {
    return 0
  }
}



const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  battery_green: {
    fontSize: 30,
    color: green[500],
    '&:hover': {
      color: green[500],
    },
  },
  battery_red: {
    fontSize: 30,
    color: red[500],
    '&:hover': {
      color: red[500],
    },
  },
};


class Battery extends React.Component {
  state = {
    open: false,
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const bettery_percent = this.props.value + '%'

    return (
     <Tooltip
       title={bettery_percent}
       interactive
     >
       <IconButton>
         {(() => {
             switch(battery_ui_value(this.props.value)) {
               case 100:
                 return (<BatteryIcon100 className={classes.battery_green} />)
               case 90:
                 return (<BatteryIcon90 className={classes.battery_green} />)
               case 80:
                 return (<BatteryIcon80 className={classes.battery_green} />)
               case 60:
                 return (<BatteryIcon60 className={classes.battery_green} />)
               case 50:
                 return (<BatteryIcon50 className={classes.battery_green} />)
               case 30:
                 return (<BatteryIcon30 className={classes.battery_green} />)
               case 20:
                 return (<BatteryIcon20 className={classes.battery_green} />)
               case 0:
                 return (<BatteryIcon0 className={classes.battery_red} />)
               default:
                 return (<BatteryIcon100 className={classes.battery_green} />)
             }
         })()}
       </IconButton>
     </Tooltip>
    );
  }
}


Battery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Battery);
