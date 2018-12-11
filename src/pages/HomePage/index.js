import React, { Component, Fragment } from 'react';
import { Header, Footer } from "../../components/Layouts"
import ContactList from '../../components/ContactList'
import AddContactDialog from '../../components/AddContactDialog'

class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openAddPage: false
        }

        this.handleAddClick = this.handleAddClick.bind(this)
    }

    handleAddClick() {
        this.setState({
            openAddContactDialog: true
        })
    }

    render() {


        return (
            <Fragment>
                <Header />
                <ContactList />
                <Footer addContactHandler={ this.handleAddClick }/>
                <AddContactDialog fromComponent={ this.state.openFromComponent }/>
            </Fragment>
        )
    }

}

export default HomePage