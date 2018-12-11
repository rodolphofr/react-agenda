import React, { Component } from 'react'
import { AppBar, Toolbar, Fab, withStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types'

const styles = {
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#2196f3'
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto'
    }
}

class Footer extends Component {

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Fab color="secondary" 
                         aria-label="Add" 
                         className={classes.fabButton} 
                         onClick={ this.props.addContactHandler }>
                        <AddIcon />
                    </Fab>
                </Toolbar>
            </AppBar>
        )
    }

}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    addContactHandler: PropTypes.func.isRequired
}

export default withStyles(styles)(Footer)