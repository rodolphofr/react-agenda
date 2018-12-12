import React, { Component, Fragment } from 'react';
import { Header, Footer } from "../../components/Layouts"
import ContactList from '../../components/ContactList'
import AddContactDialog from '../../components/AddContactDialog'

class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openAddContactDialog: false
        }

        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
    }

    handleAddClick() {
        this.setState({
            openAddContactDialog: true
        })
    }

    handleCloseDialog() {
        this.setState({
            openAddContactDialog: false
        })
    }

    render() {

        return (
            <Fragment>
                <Header />
                <ContactList />
                <Footer addContactHandler={ this.handleAddClick }/>
                <AddContactDialog onOpen={ this.state.openAddContactDialog }/>
            </Fragment>
        )
    }

}

export default HomePage