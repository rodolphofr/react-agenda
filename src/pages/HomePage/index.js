import React, { Component, Fragment } from 'react';
import { Header, Footer } from "../../components/Layouts"
import { ContactList, ContactForm } from '../../components/Contact'
import SearchBar from '../../components/SearchBar';
class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openFormAddContact: false,
            inputSearchContact: '',
            selectedContact: null 
        }

        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
        this.handleSearchContact = this.handleSearchContact.bind(this)
    }

    handleAddClick() {
        this.setState({ openFormAddContact: true })
    }

    handleCloseDialog() {
        this.setState({ openFormAddContact: false })
    }

    handleSearchContact(event) {
        this.setState({ inputSearchContact: event.target.value })
    }

    render() {

        return (
            <Fragment>
                <Header>
                    <SearchBar onInput={ this.handleSearchContact }/>
                </Header>
                <ContactList filter={ this.state.inputSearchContact }/>
                <ContactForm open={ this.state.openFormAddContact } onClose={ this.handleCloseDialog }/>
                <Footer onClickAddHandler={ this.handleAddClick } />
            </Fragment>
        )
    }

}

export default HomePage