import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
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
