import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { style } from './style';
import InputText from '../../Components/InputText';

const RegisterPage = () => {
    const classes = style();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {process.env.REACT_APP_NAME}
                </Typography>
                <form className={classes.form} noValidate>
                    <InputText
                        type="email"
                        label="Email"
                        name="email"
                    />
                    <InputText
                        type="password"
                        label="Mot de passe"
                        name="password"
                        autoComplete="password"
                    />
                    <InputText
                        type="password"
                        label="Vérifier le mot de passe"
                        name="password"
                        autoComplete="password-verification"
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Inscription
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Mot de passe oublié ?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/login" variant="body2">
                                {"Déjà un compte ?"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegisterPage;
