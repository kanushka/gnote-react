import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NoteMenu from './NoteMenu/NoteMenu';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardActionRoot: {
        float: 'right',
        justifyContent: 'space-between',
    }
};

class NoteCard extends Component {
    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                Word of the Day
                </Typography>
                <Typography variant="headline" component="h2">
                be
                {bull}
                nev
                {bull}o{bull}
                lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
                <CardActions classes={{root:classes.cardActionRoot}}>                    
                    <NoteMenu />
            </CardActions>
            </Card>
        );
    }
}


NoteCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoteCard);