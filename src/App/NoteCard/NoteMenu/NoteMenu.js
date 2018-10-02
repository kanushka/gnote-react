import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import NoteDialog from '../NoteDialog/NoteDialog';

class NoteMenu extends Component {

    constructor(props, context) {
        super(props, context);
        this.noteDialog = React.createRef();
    }
    

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };

    openNoteModal = () => {        
        this.noteDialog.current.handleClickOpen();
        this.handleClose();
    }
    
    render() {
        const { anchorEl } = this.state;

        return (
            <div>                
                <IconButton
                    aria-label="more_vert"
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVert />
                </IconButton>     
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>View</MenuItem>
                    <MenuItem onClick={this.openNoteModal}>Edit</MenuItem>
                    <MenuItem onClick={this.handleClose}>Delete</MenuItem>
                </Menu>
                
                <NoteDialog ref={this.noteDialog}/>
            </div>
        );
    }
}

export default NoteMenu;