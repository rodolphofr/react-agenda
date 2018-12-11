import React, { Component, Fragment } from 'react'
import Contact from "./Contact";
import * as Store from '../../store';
import PropTypes from 'prop-types'
import { 
    CssBaseline, 
    Paper, 
    Typography, 
    List, 
    withStyles,
    ListSubheader } from "@material-ui/core";

const styles = theme => ({
    typography: {
        paddingTop: theme.spacing.unit * 13,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        float: 'right',
        color: theme.palette.text.disabled,
        fontWeight: 'bold'
      },
      paper: {
        paddingBottom: theme.spacing.unit * 4,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        width: '100%'
      },
      list: {
        marginBottom: theme.spacing.unit * 2,
      },
      listSubHeader: {
        backgroundColor: theme.palette.background.paper,
     }
})

class ContactList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contacts: [],
            totalContacts: 0
        }
    }

    componentDidMount() {
        const { contacts } = Store
        this.setState({ contacts , totalContacts: contacts.length })
    }

    render() {

        const { classes } = this.props
        const { contacts, totalContacts } = this.state

        return (
            <Fragment>
                <CssBaseline />
                <Paper square className={classes.paper}>
                    <ListSubheader className={classes.listSubHeader}>
                        <Typography className={classes.typography} variant="h5" gutterBottom>
                            { `${totalContacts} contato${ totalContacts > 1 ? 's' : '' }` }
                        </Typography>
                    </ListSubheader>
                    <List className={classes.list}>
                        { 
                            contacts.length && 
                                contacts.map(contact => <Contact key={ contact.id } info={ contact }/>)
                        }
                    </List>
                </Paper>
            </Fragment>
        )
    }
}

ContactList.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContactList)
