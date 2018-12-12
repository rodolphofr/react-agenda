import React, { Component, Fragment } from 'react';
import { Header, Footer } from "../../components/Layouts"
import { ContactList, ContactForm } from '../../components/Contact'

class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dialogOpen: false
        }

        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleCloseDialog = this.handleCloseDialog.bind(this)
    }

    handleAddClick() {
        this.setState({
            dialogOpen: true
        })
    }

    handleCloseDialog() {
        this.setState({
            dialogOpen: false
        })
    }

    render() {

        return (
            <Fragment>
                <Header />
                <ContactList />
                <ContactForm open={ this.state.dialogOpen } onClose={ this.handleCloseDialog }/>
                <Footer onClickAddHandler={ this.handleAddClick } />
            </Fragment>
        )
    }

}

export default HomePage