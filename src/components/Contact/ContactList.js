import React, { Component, Fragment } from 'react'
import ContactItem from "./ContactItem";
import ContactInfoDialog from "./ContactInfoDialog";
import * as Store from '~/store';
import PropTypes from 'prop-types'
import { 
    CssBaseline, 
    Paper, 
    List, 
    withStyles,
    ListSubheader } from "@material-ui/core";

const styles = theme => ({
      paper: {
        marginTop: theme.spacing.unit * 0.65,
        paddingBottom: theme.spacing.unit * 3,
        width: '100%',
      },
      list: {
        paddingTop: 0,
        marginBottom: theme.spacing.unit * 2,
      },
      listSubHeader: {
        backgroundColor: '#ddd',
        color: '#000',
        fontSize: 20,
        fontWeigth: 'bold'
     }
})

class ContactList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contacts: [],
            contactSelected: null
        }

        this.category = ''
        this.isToRenderNewCategory = this.isToRenderNewCategory.bind(this)
        this.handleShowInfo = this.handleShowInfo.bind(this)
        this.handleCloseInfo = this.handleCloseInfo.bind(this)
        this.filterList = this.filterList.bind(this)
    }

    componentDidMount() {
        this.setState({ contacts: Store.contacts })
    }

    isToRenderNewCategory(name) {
        
        const category = name[0] 

        if (category === this.category) 
            return false
        
        this.category = category
        return true

    }
    
    handleShowInfo(item) {
        this.setState({ contactSelected: item }) 
    }

    handleCloseInfo() {
        this.setState({ contactSelected: null })
    }

    filterList(search) {

        const contacts = this.state.contacts
            .filter(({ name }) => new RegExp(`(?=${search})`, 'i').test(name))

        setTimeout(() => this.setState({ contacts }), 500)

    }

    render() {

        const { classes, filter } = this.props
        const { contacts, contactSelected } = this.state

        if (filter) 
            this.filterList(filter)

        return (
            <Fragment>
                <CssBaseline />
                <Paper square className={classes.paper}>
                    <List className={classes.list}>
                        { 
                            contacts.map(contact => (
                                <Fragment key={ contact.id }>
                                    { 
                                        this.isToRenderNewCategory(contact.name) && 
                                            <ListSubheader className={classes.listSubHeader}>
                                                { contact.name[0].toUpperCase() }
                                            </ListSubheader>
                                    }
                                    <ContactItem data={ contact } onClick={ () => this.handleShowInfo(contact) }/>
                                </Fragment>
                            ))
                        }
                    </List>
                </Paper>
                { 
                    contactSelected && 
                        <ContactInfoDialog open={ !!contactSelected } onClose={ this.handleCloseInfo } data={ contactSelected } /> 
                }
            </Fragment>
        )
    }
}

ContactList.propTypes = {
    classes: PropTypes.object.isRequired,
    filter: PropTypes.string
}

export default withStyles(styles)(ContactList)
