import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { InputBase } from '@material-ui/core';

class NoteDialog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            title: this.props.title,
            note: this.props.note,
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    updateTitle = event => {
        this.setState({ title: event.target.value });
    }

    updateNote = event => {
        this.setState({ note: event.target.value });
    }

    saveNote = () => {
        this.props.onSave(this.state.title, this.state.note);
        this.handleClose();
    }

    render() {
        let titleAttributes = this.props.title ? { defaultValue: this.props.title } : { placeholder: 'Title' };
        let noteAttributes = this.props.note ? { defaultValue: this.props.note } : { placeholder: 'Note' };

        return (
            <div>                
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth
                    disableBackdropClick
                    disableEscapeKeyDown
                >
                    <DialogTitle id="form-dialog-title" >                        
                    <InputBase
                        fullWidth
                            {...titleAttributes}
                            onChange={this.updateTitle}
                    />
                        
                    </DialogTitle>
                    <DialogContent>                        
                        <InputBase
                            multiline
                            fullWidth 
                            {...noteAttributes}
                            onChange={this.updateNote}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.saveNote} color="primary">
                            Save
                         </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default NoteDialog;