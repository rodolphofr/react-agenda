import React from 'react'
import { AppBar, Typography, Toolbar, withStyles } from "@material-ui/core";
import PropTypes from 'prop-types'
import SearchBar from "../SearchBar";

const styles = theme => ({
    appBar: {
        backgroundColor: '#2196f3'
    },
    typography: {
        color: theme.palette.common.white,
        paddingTop: 20,
        paddingBottom: 20,
        marginLeft: 0,
        marginBottom: 0,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        [theme.breakpoints.up('xs')]: {
            fontSize: 23,
            marginRight: 10
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 35,
            marginRight: 10
        }
    }
})

const Header = props => {
    const { classes } = props;

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Typography className={classes.typography} gutterBottom>
                    Contact.me
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