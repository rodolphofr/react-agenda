import React, { Component } from 'react'
import { Avatar, ListItem, withStyles, ListItemText } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
    avatar: {
        margin: 10,
        width: 60,
        height: 60   
    }
}

class Contact extends Component {

    render() {

        const { name, avatar, position } = this.props.data
        const { classes, ...others } = this.props
        
        return (
            <ListItem button { ...others }>
                <Avatar className={classes.avatar} alt={`avatar de ${name}`} src={ `/avatars/${avatar}.jpg` } />
                <ListItemText primary={name} secondary={ position }/>
            </ListItem>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string
    }).isRequired
}

export default withStyles(styles)(Contact)         