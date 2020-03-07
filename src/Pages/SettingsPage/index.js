import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


import CardProfile from '../../Components/cardProfile';
import PasswordChange from '../../Components/PasswordChange';
import { style } from './style';

const SettingsPage = () => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const changePanel = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const classes = style();

    return (
        <Container component="main" maxWidth="lg" >
            <h1>Paramètres</h1>
            <div className={classes.tabs}>
                <AppBar position="static" className={classes.tabs}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Mes informations" {...a11yProps(0)} />
                        <Tab label="Sécurité" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>

                {/* General */}
                <TabPanel value={value} index={0} >
                    <div className={classes.flex}>
                        <CardProfile firstname="Théo" lastname="GRELET" email="theo.grelet@ynov.com" />
                    </div>
                </TabPanel>

                {/* Securité */}
                <TabPanel value={value} index={1}>
                    <PasswordChange />
                </TabPanel>
            </div>












        </Container>
    );
}

export default SettingsPage;
