import React, { Fragment } from 'react'
import ContactItem from "./ContactItem";
import PropTypes from 'prop-types'
import { 
    CssBaseline, 
    Paper, 
    List, 
    withStyles,
    ListSubheader 
} from "@material-ui/core";

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

const ContactList = ({ classes, onSelectedItem, items }) => {

    let category = ''

    function isToRenderNewCategory(name) {
        
        const newCategory = name[0] 

        if (newCategory === category) 
            return false
        
        category = newCategory
        return true

    }

    return (
        <Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
                <List className={classes.list}>
                    { items.map(contact => (
                        <Fragment key={ contact.id }>
                            { 
                                isToRenderNewCategory(contact.name) && 
                                    <ListSubheader className={classes.listSubHeader}>
                                        { contact.name[0].toUpperCase() }
                                    </ListSubheader>
                            }
                            <ContactItem data={ contact } onClick={ onSelectedItem(contact) }/>
                        </Fragment>
                    ))}
                </List>
            </Paper>
        </Fragment>
    )

}

ContactList.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    onSelectedItem: PropTypes.func.isRequired
}

export default withStyles(styles)(ContactList)
