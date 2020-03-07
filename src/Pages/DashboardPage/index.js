import React from 'react';
import Container from '@material-ui/core/Container';


import { style } from './style';

const DashboardPage = () => {
    const classes = style();

    return (
        <Container component="main" maxWidth="lg">
          
          <h1>Dashboard</h1>

        </Container>
    );
}

export default DashboardPage;
