import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import RegisterPage from './Pages/RegisterPage/';
import LoginPage from './Pages/LoginPage/';

import DashboardPage from "./Pages/DashboardPage/";
import PasswordsPage from "./Pages/PasswordsPage/";
import PasswordsGeneratorPage from "./Pages/PasswordsGeneratorPage/";
import SettingsPage from './Pages/SettingsPage/';

import Menu from './Components/Menu/';


const routes = [
  {
    path: "/login",
    main: () => <LoginPage />
  },
  {
    path: "/register",
    main: () => <RegisterPage />
  },
  {
    path: "/dashboard",
    main: () => <DashboardPage />
  },
  {
    path: "/passwords",
    main: () => <PasswordsPage />
  },
  {
    path: "/passwordsGenerator",
    main: () => <PasswordsGeneratorPage />
  },
  {
    path: "/settings",
    main: () => <SettingsPage />
  },
];

export default function Sidebar() {
  return (
    <Router>
      <Menu />

      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
          />
        ))}
      </Switch>

      <div style={{ flex: 1, padding: "10px" }}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router >
  );
}