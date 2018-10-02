import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NoteCard from '../NoteCard/NoteCard';

const styles = theme => ({
    root: {
        marginTop: '20px',
        flexGrow: 1,
    },    
  });

class AppGrid extends Component {

    state = {
        spacing: '16',
    };
    
    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
                            <Grid key={value} item>
                                <NoteCard />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

AppGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(AppGrid);