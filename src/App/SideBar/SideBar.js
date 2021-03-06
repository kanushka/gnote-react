import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
};
  
class SideBar extends Component {

  state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };

    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
  };
  
  funct = () => {
    console.log('funct called');
};
    
    render() {
        const { classes } = this.props;
    
        const sideList = (
          <div className={classes.list}>
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
          </div>
        );
    
        const fullList = (
          <div className={classes.fullList}>
            <List>{mailFolderListItems}</List>
            <Divider />
            <List>{otherMailFolderListItems}</List>
          </div>
        );
    
        return (
          <div>
            <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
            <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </Drawer>
            <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('top', false)}
                onKeyDown={this.toggleDrawer('top', false)}
              >
                {fullList}
              </div>
            </Drawer> 
          </div>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);