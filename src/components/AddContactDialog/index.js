import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, IconButton, Typography, Button, withStyles, Slide } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
// import PropTypes from "prop-types";

const styles = {
    appBar: {
        position: 'relative',
        backgroundColor: '#2196f3'
    },
    typography: {
        flex: 1,
    }
};



class AddContactDialog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

        this.transitionType = this.transitionType.bind(this)
    }

    transitionType(props) {
        return <Slide direction="up" {...props} />
    }

    render() {
        
        const { classes, onOpen, onClose } = this.props

        return (
            <Dialog
                fullScreen
                open={ onOpen }
                onClose={ onClose }
                TransitionComponent={ this.transitionType }
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                    <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.typography}></Typography>
                    <Button color="inherit" onClick={this.handleClose}>
                        Adicionar
                    </Button>
                    </Toolbar>
                </AppBar>
            </Dialog>
        )
    }
}

export default withStyles(styles)(AddContactDialog)