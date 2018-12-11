import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, IconButton, Typography, Button, withStyles, Slide } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";

const styles = {
    appBar: {
        position: 'relative',
    },
    typography: {
        flex: 1,
    },
};

class AddContactDialog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false
        }

        this.handleClose = this.handleClose.bind(this)
    }

    handleClose() {
        this.setState({ open: false })
    }


    render() {
        
        const { classes } = this.props

        return (
            <Dialog
                fullScreen
                open={ this.state.open || this.props.openFromComponent }
                onClose={this.handleClose}
                TransitionComponent={ <Slide direction="up" {...this.props} /> }
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                    <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.typography}>
                        Sound
                    </Typography>
                    <Button color="inherit" onClick={this.handleClose}>
                        save
                    </Button>
                    </Toolbar>
                </AppBar>
            </Dialog>

        )
    }
}

export default withStyles(styles)(AddContactDialog)