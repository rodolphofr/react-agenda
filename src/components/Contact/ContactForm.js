import React, { Component } from 'react'
import { Dialog, AppBar, Toolbar, IconButton, Button, withStyles, Slide } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";

const styles = {
    appBar: {
        position: 'relative',
        backgroundColor: '#2196f3'
    },
    gap: {
        flex: 1,
    }
};

class ContactForm extends Component {

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
        
        const { classes, open, onClose } = this.props

        return (
            <Dialog
                fullScreen
                open={ open }
                TransitionComponent={ this.transitionType }
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={ onClose } aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <div className={classes.gap}></div>
                        <Button color="inherit" size="large">
                            Adicionar
                        </Button>
                    </Toolbar>
                </AppBar>
            </Dialog>
        )
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(ContactForm)