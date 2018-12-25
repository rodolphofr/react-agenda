import * as React from 'react';
import ContactItem from './ContactItem';
import type { PersonalContact } from '~/store';

import {
  CssBaseline,
  Paper,
  List,
  withStyles,
  ListSubheader,
} from '@material-ui/core';

const styles = (theme: any): any => ({
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
    fontWeigth: 'bold',
  },
});

type Props = {
  classes: any,
  onSelectedItem: Function,
  items: Array<PersonalContact>,
};

const ContactList = (props: Props): React.Element<'div'> => {
  let category = '';

  function isToRenderNewCategory(name: string): boolean {
    const newCategory = name[0];

    if (newCategory === category) return false;

    category = newCategory;
    return true;
  }

  const { classes, onSelectedItem, items } = props;

  return (
    <div>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {items.map(
            (contact: PersonalContact): React.Element<'div'> => (
              <div key={contact.id}>
                {isToRenderNewCategory(contact.name) && (
                  <ListSubheader className={classes.listSubHeader}>
                    {contact.name[0].toUpperCase()}
                  </ListSubheader>
                )}
                <ContactItem data={contact} onClick={onSelectedItem(contact)} />
              </div>
            ),
          )}
        </List>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ContactList);
