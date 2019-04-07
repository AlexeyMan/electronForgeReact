import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';
// import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
// import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

class app extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: false,
      left: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.startServer = this.startServer.bind(this);
    this.stopServer = this.stopServer.bind(this);
  }

  toggleDrawer() {
    const status = this.state.left !== true;
    this.setState({
      left: status,
    });
  }
  startServer() {
    console.log('connect');
    ipcRenderer.send('as-mes', 'ping');
  }
  stopServer() {
    console.log('desconnect');
    ipcRenderer.send('des', 'piing');
  }
  render() {
    const alCount = this.props.alarmCount.filter(item => item.actMess === true).length
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* <Button onClick={this.toggleDrawer} ><MenuIcon />Open Left</Button> */}
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" >
           My Pump stations
            </Typography>
            <div >
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={alCount} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {/* <Button onClick={this.toggleDrawer} ><MenuIcon />Open Left</Button> */}
        <Drawer open={this.state.left} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            // onKeyDown={this.toggleDrawer}
          >
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="START" onClick={this.startServer} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="STOP" onClick={this.stopServer}  />
              </ListItem>
              {/* <ListItemLink href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemLink> */}
            </List>
          </div>

        </Drawer>

      </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    alarmCount: state.addMess,
  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(app);