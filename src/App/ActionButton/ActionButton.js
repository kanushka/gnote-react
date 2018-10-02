import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,        
    },    
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 3,
        right: theme.spacing.unit * 3,
    },
});

class ActionButton extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="fab" color="secondary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Button>
            </div>
        );
    }
}

ActionButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(ActionButton);