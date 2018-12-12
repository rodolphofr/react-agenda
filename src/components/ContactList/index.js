import React, { Component, Fragment } from 'react'
import Contact from "./Contact";
import * as Store from '../../store';
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
        }

        this.category = ''
        this.isToRenderNewCategory = this.isToRenderNewCategory.bind(this)
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

    render() {

        const { classes } = this.props

        return (
            <Fragment>
                <CssBaseline />
                <Paper square className={classes.paper}>
                    <List className={classes.list}>
                        { this.state.contacts.map(contact => (
                            <Fragment key={ contact.id }>
                                { 
                                    this.isToRenderNewCategory(contact.name) && 
                                        <ListSubheader className={classes.listSubHeader}>
                                            { contact.name[0].toUpperCase() }
                                        </ListSubheader>
                                }
                                <Contact info={ contact }/>
                            </Fragment>
                        ))}
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
