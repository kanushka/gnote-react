import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NoteMenu from './NoteMenu/NoteMenu';
import { IconButton } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import NoteDialog from './NoteDialog/NoteDialog';

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
    constructor(props, context) {
        super(props, context);
        this.state = {
            title : this.props.title || 'Title',
            note : this.props.note || 'Note',
        }
        this.noteDialog = React.createRef();
    }    

    editBtnClick = event => {
        this.noteDialog.current.handleClickOpen();
    }

    updateNote = (title, note) => {
        this.setState({
            title: title,
            note: note,
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>                
                    <Typography
                        variant="headline"
                        component="h2"
                        noWrap
                    >
                        {this.state.title}
                    </Typography>                
                    <Typography
                        component="p"
                        noWrap
                    >
                        {this.state.note}            
                    </Typography>
                </CardContent>
                <CardActions classes={{ root: classes.cardActionRoot }}>                    
                    <IconButton
                        aria-label="Edit"                    
                        aria-haspopup="true"
                        onClick={this.editBtnClick}
                    >
                        <Edit />
                    </IconButton> 
                    <NoteMenu />
                </CardActions>
                <NoteDialog
                    title={this.state.title}
                    note={this.state.note}  
                    ref={this.noteDialog}
                    onSave={this.updateNote}
                />
            </Card>
            
        );
    }
}


NoteCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoteCard);