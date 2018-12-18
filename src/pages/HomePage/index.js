import React, { Component, Fragment } from 'react';
import { Header, Footer } from "~/components/Layouts"
import { ContactList, ContactForm, ContactInfoDialog } from '~/components/Contact'
import SearchBar from '~/components/SearchBar';
import * as Store from '~/store';

class HomePage extends Component {

    constructor() {
        super()

        this.state = {
            openAddForm: false,
            contacts: [],
            contactSelected: undefined
        }
    }

    componentDidMount() {
        this.setState({ contacts: Store.contacts })
    }

    handleAddClick = () => this.setState({ openAddForm: true })

    handleCloseDialog = () => this.setState({ openAddForm: false })

    handleShowInfo = (item) => () => this.setState({ contactSelected: item }) 

    handleCloseInfo = () => this.setState({ contactSelected: undefined })
    
    filterList = (event) => {

        const search = event.target.value
        const contacts = this.state.contacts.filter(({ name }) => 
                new RegExp(`(?=${search})`, 'i').test(name.replace(/\s+/g, '')))

        setTimeout(() => {

            if (!search)
                this.setState({ contacts: Store.contacts })
            else if (contacts.length) 
                this.setState({ contacts })
            
        }, 500)

    }

    render() {

        const {
            contacts,
            openAddForm,
            contactSelected
        } = this.state

        return (
            <Fragment>
                <Header>
                    <SearchBar onInput={ this.filterList }/>
                </Header>
                <ContactList items={ contacts } onSelectedItem={ this.handleShowInfo }/>
                <ContactForm open={ openAddForm } onClose={ this.handleCloseDialog }/>
                <Footer onClickAddHandler={ this.handleAddClick } />
                { contactSelected && 
                    <ContactInfoDialog open={ !!contactSelected } onClose={ this.handleCloseInfo } data={ contactSelected } /> 
                }
            </Fragment>
        )
    }

}

export default HomePage