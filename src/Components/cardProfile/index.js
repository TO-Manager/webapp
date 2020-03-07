import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { style } from './style';

const CardProfile = ({ firstname, lastname, email }) => {
  const classes = style();


  return (

    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.center}>


        {/* <CardHeader title="Mes informations" className={classes.title}/> */}
        <Typography color="textPrimary" >
          <h2>{firstname} {lastname}</h2>
        </Typography>
        <Divider variant="middle" />
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label={firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label={lastname}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label={email}
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Button variant="outlined" color="primary" className={classes.saveButton}>
            Sauvegarder
        </Button>
        </form>
        <Button variant="outlined" color="secondary" className={classes.saveButton}>
            Fermer mon compte
        </Button>

      </CardContent>
    </Card>

  );
}

export default CardProfile;
