import React,  { Component, Fragment } from 'react'
import { Dialog, DialogTitle, List, ListItem, withStyles, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import blue from '@material-ui/core/colors/blue';
import { phoneNumberToBRFormat } from "../../utils";
import PropTypes from "prop-types";

const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};

class ContactInfo extends Component {

    render() {

        const { name, contacts } = this.props.data
        const { classes, ...others } = this.props;

        return (
            <Dialog aria-labelledby="simple-dialog-title" { ...others }>
                <DialogTitle>{ name }</DialogTitle>
                <Fragment>
                    <List>
                        { contacts.emails.map(email => (
                            <ListItem button key={email}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItem>
                        ))}
                        { contacts.phoneNumbers.map(({ number }) => (
                            <ListItem button key={number}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <PhoneIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={ phoneNumberToBRFormat(number) } />
                            </ListItem>
                        ))}
                    </List>
                </Fragment>
            </Dialog>
        )
    }

}

ContactInfo.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string,
        contacts: PropTypes.object.isRequired
    }).isRequired
}

export default withStyles(styles)(ContactInfo)