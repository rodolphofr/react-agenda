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

        const { name, avatar, id, contacts } = this.props.info
        const { classes } = this.props
        
        return (
            <ListItem key={id} button>
                <Avatar className={classes.avatar} alt={`avatar de ${name}`} src={ `/avatars/${avatar}.jpg` } />
                <ListItemText primary={name} secondary={contacts.phoneNumbers[0].number}/>
            </ListItem>
        )
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    info: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string
    }).isRequired
}

export default withStyles(styles)(Contact)