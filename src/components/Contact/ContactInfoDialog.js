import React, { Fragment } from 'react'
import { Dialog, DialogTitle, List, ListItem, withStyles, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import blue from '@material-ui/core/colors/blue';
import { phoneNumberToBRFormat } from "~/utils";
import PropTypes from "prop-types";

const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
}

const ContactInfoDialog = ({ data: { name, contacts }, classes, ...others }) => {

    return (
        <Dialog aria-labelledby="simple-dialog-title" { ...others }>
            <DialogTitle>{ name }</DialogTitle>
            <Fragment>
                <List>
                    <ListItem disabled>
                        <ListItemText>E-mails</ListItemText>
                    </ListItem>
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
                    <ListItem disabled>
                        <ListItemText>Telefones</ListItemText>
                    </ListItem>
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

ContactInfoDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string,
        contacts: PropTypes.object.isRequired
    }).isRequired
}

export default withStyles(styles)(ContactInfoDialog)