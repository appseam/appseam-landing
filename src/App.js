import React from 'react'
import theme from './theme'
import { Grommet } from 'grommet'

import ANav from './components/Navbar'
import AFooter from './components/Footer'

import Home from './views/Home'

export default function App() {
  return (
    <Grommet theme={theme} background='brand-1' full={true}>
      <ANav/>
      <Home/>
      <AFooter/>
    </Grommet>
  );
}
