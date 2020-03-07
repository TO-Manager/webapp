import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { style } from './style';

const LoginPage = () => {
    const classes = style();

    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Connexion
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse Email"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Se connecter
              </Button>
              
              <Grid container>
                <Grid item xs>
                  <Link to="" variant="body2">
                    Mot de passe oublié ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Nouveau ? Créer un compte"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    );
}

export default LoginPage;
