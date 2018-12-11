import React from 'react'
import { AppBar, Typography, Toolbar, withStyles } from "@material-ui/core";
import PropTypes from 'prop-types'
import SearchBar from "../SearchBar";

const styles = theme => ({
    AppBar: {
        backgroundColor: '#2196f3'
    },
    title: {
        color: theme.palette.common.white,
        padding: 20,
        marginLeft: 0,
        marginBottom: 0,
    }
})

const Header = props => {
    const { classes } = props;

    return (
        <AppBar className={classes.AppBar}>
            <Toolbar>
                <Typography className={classes.title} variant="h4" gutterBottom>
                    Agenda
                </Typography>
                <SearchBar input={ () => console.log('searching...') } />
            </Toolbar>
        </AppBar>        
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
} 

export default withStyles(styles)(Header) 