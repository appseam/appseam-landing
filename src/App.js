import React from 'react'
import theme from './theme'
import { Grommet } from 'grommet'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css'

import ANav from './components/Navbar'
import AFooter from './components/Footer'

import { BundlesProvider } from './contexts'

import Home from './views/Home'
import Explore from './views/Explore'

export default function App() {
  return (
    <BundlesProvider>
      <Grommet theme={theme} background='brand-1' full={true}>
        <Router>
          <ANav/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
          </Switch>
          <AFooter/>
        </Router>
      </Grommet>
    </BundlesProvider>
  );
}
