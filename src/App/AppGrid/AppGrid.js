import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NoteCard from '../NoteCard/NoteCard';

const styles = theme => ({
    root: {
        marginTop: '50px',
        flexGrow: 1,
        textAlign: 'left',
        padding: '20px',
    },    
  });

class AppGrid extends Component {

    state = {
        spacing: '16',
        notes: [
            {
                id: 1001,
                title: 'test title 1',
                note: 'test note body 1'
            },
            {
                id: 1002,
                title: 'test title 2',
                note: 'test note body 2'
            },
            {
                id: 1003,
                title: 'test title 3 ',
                note: 'test note body 3'
            },
            {
                id: 1004,
                title: 'test title 2',
                note: 'test note body 2'
            },
            {
                id: 1005,
                title: 'test title 3 ',
                note: 'test note body 3'
            },
            {
                id: 1006,
                title: 'test title 3 ',
                note: 'test note body 3'
            },
            {
                id: 1007,
                title: 'test title 3 ',
                note: 'test note body 3'
            },
        ]
    };
    
    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        
        return (
            <Grid
                container                
                className={classes.root}
                spacing={Number(spacing)}  
                justify='space-around'
            >
                <Grid item xs={12}>
                    <Grid container className={classes.demo} spacing={Number(spacing)}>
                        {this.state.notes.map(card => (
                            <Grid key={card.id} item xs={12} sm={4} md={3}>
                                <NoteCard
                                    title={card.title}
                                    note={card.note}
                                />
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