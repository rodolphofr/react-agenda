import React, { Component, Fragment } from 'react';
import { Header, Footer } from '~/components/Layouts';
import {
  ContactList,
  ContactForm,
  ContactInfoDialog,
} from '~/components/Contact';
import SearchBar from '~/components/SearchBar';
import * as Store from '~/store';

type Props = {};
type State = {
  openAddForm: boolean,
  contacts: any[],
  contactSelected: any,
};

class HomePage extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      openAddForm: false,
      contacts: [],
      contactSelected: undefined,
    };
  }

  componentDidMount(): void {
    this.setState({
      contacts: Store.contacts,
    });
  }

  handleAddClick = (): void => {
    this.setState({
      openAddForm: true,
    });
  };

  handleCloseDialog = (): void => {
    this.setState({
      openAddForm: false,
    });
  };

  handleShowInfo = (item: any): Function => {
    return () =>
      this.setState({
        contactSelected: item,
      });
  };

  handleCloseInfo = (): void => {
    this.setState({
      contactSelected: undefined,
    });
  };

  filterList = (e: SyntheticEvent<HTMLInputElement>): void => {
    const storeContacts = Store.contacts;
    const search = e.currentTarget.value;

    const contacts = storeContacts.filter(({ name }) =>
      new RegExp(`(?=${search})`, 'i').test(name.replace(/\s+/g, '')),
    );

    setTimeout(() => {
      if (!search) this.setState({ contacts: storeContacts });
      else if (contacts.length) this.setState({ contacts });
    }, 300);
  };

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
