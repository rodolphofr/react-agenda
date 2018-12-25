import * as React from 'react';

import { contacts as AllContacts } from '~/store';
import type { PersonalContact } from '~/store';

import { Header, Footer } from '~/components/Layouts';
import SearchBar from '~/components/SearchBar';
import {
  ContactList,
  ContactForm,
  ContactInfoDialog,
} from '~/components/Contact';

type Props = {};
type State = {
  openAddForm: boolean,
  contacts: PersonalContact[],
  contactSelected: ?PersonalContact,
};

class HomePage extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      openAddForm: false,
      contacts: [],
      contactSelected: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      contacts: AllContacts,
    });
  }

  handleAddClick = () => {
    this.setState({
      openAddForm: true,
    });
  };

  handleCloseDialog = () => {
    this.setState({
      openAddForm: false,
    });
  };

  handleShowInfo = (item: PersonalContact): Function => {
    return (): void =>
      this.setState({
        contactSelected: item,
      });
  };

  handleCloseInfo = () => {
    this.setState({
      contactSelected: undefined,
    });
  };

  filterList = (e: SyntheticEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value;

    const contacts = AllContacts.filter(
      (contact: PersonalContact): boolean => {
        return new RegExp(`(?=${search})`, 'i').test(
          contact.name.replace(/\s+/g, ''),
        );
      },
    );

    setTimeout(() => {
      if (!search) {
        this.setState({ contacts: AllContacts });
      } else if (contacts.length) {
        this.setState({ contacts });
      }
    }, 300);
  };

  render(): React.Element<'div'> {
    const { contacts, openAddForm, contactSelected } = this.state;

    return (
      <div>
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
      </div>
    );
  }
}

export default HomePage;
