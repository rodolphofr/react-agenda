import React, { Component, Fragment } from 'react';
import { Header, Footer } from '~/components/Layouts';
import {
  ContactList,
  ContactForm,
  ContactInfoDialog,
} from '~/components/Contact';
import SearchBar from '~/components/SearchBar';
import * as Store from '~/store';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      openAddForm: false,
      contacts: [],
      contactSelected: undefined,
    };

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleShowInfo = this.handleShowInfo.bind(this);
    this.handleCloseInfo = this.handleCloseInfo.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount() {
    this.setState({
      contacts: Store.contacts,
    });
  }

  handleAddClick() {
    return this.setState({
      openAddForm: true,
    });
  }

  handleCloseDialog() {
    this.setState({
      openAddForm: false,
    });
  }

  handleShowInfo(item) {
    return () =>
      this.setState({
        contactSelected: item,
      });
  }

  handleCloseInfo() {
    this.setState({
      contactSelected: undefined,
    });
  }

  filterList(e) {
    const storeContacts = Store.contacts;
    const search = e.target.value;

    const contacts = storeContacts.filter(({ name }) =>
      new RegExp(`(?=${search})`, 'i').test(name.replace(/\s+/g, '')),
    );

    setTimeout(() => {
      if (!search) this.setState({ contacts: storeContacts });
      else if (contacts.length) this.setState({ contacts });
    }, 300);
  }

  render() {
    const { contacts, openAddForm, contactSelected } = this.state;

    return (
      <Fragment>
        <Header>
          <SearchBar onInput={this.filterList} />
        </Header>
        <ContactList items={contacts} onSelectedItem={this.handleShowInfo} />
        <ContactForm open={openAddForm} onClose={this.handleCloseDialog} />
        <Footer onClickAddHandler={this.handleAddClick} />
        {contactSelected && (
          <ContactInfoDialog
            open={!!contactSelected}
            onClose={this.handleCloseInfo}
            data={contactSelected}
          />
        )}
      </Fragment>
    );
  }
}

export default HomePage;
