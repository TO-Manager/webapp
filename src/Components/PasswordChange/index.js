import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Divider, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { style } from './style';

const PasswordChange = () => {
  const classes = style();


  return (

    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.center}>


        <CardHeader title="Changer son mot de passe" />
        <Divider variant="middle" />
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <TextField
                autoComplete="oldPassword"
                name="oldPassword"
                variant="outlined"
                id="oldPassword"
                fullWidth
                label="Ancien mot de passe"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="newPassword"
                name="newPassword"
                variant="outlined"
                fullWidth
                id="newPassword"
                label="Nouveau mot de passe"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="newPasswordConfirm"
                name="newPasswordConfirm"
                variant="outlined"
                fullWidth
                id="newPasswordConfirm"
                label="Confirmer le nouveau mot de passe"
              />
            </Grid>
          </Grid>
          <Button variant="outlined" color="primary" className={classes.saveButton}>
            Changer
        </Button>
        </form>

      </CardContent>
    </Card>

  );
}

export default PasswordChange;
