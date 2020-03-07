import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import MailIcon from '@material-ui/icons/Mail';
import SmsIcon from '@material-ui/icons/Sms';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import { style } from './style';

const ListSettings = () => {
  const classes = style();
  const [checked, setChecked] = React.useState(['notifs']);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List subheader={<ListSubheader>Notifications générale</ListSubheader>} className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-mail" primary="Mail" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('notifs')}
            checked={checked.indexOf('notifs') !== -1}
            inputProps={{ 'aria-labelledby': 'switch-list-label-mail' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <SmsIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-sms" primary="Sms" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('sms')}
            checked={checked.indexOf('sms') !== -1}
            inputProps={{ 'aria-labelledby': 'switch-list-label-sms' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="middle" />
      <ListSubheader>Téléphone</ListSubheader>
      <ListItem>
        <ListItemIcon>
          <PhoneIphoneIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-phone" primary="Notification Push" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('notifs')}
            checked={checked.indexOf('notifs') !== -1}
            inputProps={{ 'aria-labelledby': 'switch-list-label-phone' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>

    
      );
    }
    
    export default ListSettings;
