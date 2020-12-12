import React from 'react';
import SubscribeForm from './components/SubscribeForm'
import {
  Box,
  Grommet, 
  Nav, 
  Anchor, 
  Grid, 
  Carousel, 
  Image, 
  Heading, 
  Text
 } from 'grommet'

const theme = {
  global: {
    colors: {
      'purple': '#2E294E',
      'yellow': '#FFD400',
      'white': '#ffffff',
      'green': '#75ff9a',
      'brand': '#ffffff',
      'red': '#C41E3D'
    },
    control: {
      border: {
        radius: '50px',
        width: '2px',
        color: 'white'
      }
    },
    focus: {
      outline: {
        size: '0px'
      }
    }
  },
  grommet: {
    extend: `{background-image: linear-gradient(#282343, #36305b, #443c72, #6054a0)}`
  },
  button: {
    color: 'purple',
    border: {
      color: 'yellow'
    },
    primary: {
      color: 'yellow'
    }
  },
  anchor: {
    color: 'white'
  },
  carousel: {
    icons: {
      color: 'purple'
    }
  }
}

export default function App() {
  return (
    <Grommet theme={theme} background='purple' full={true}>
      <Nav direction="row-reverse" pad="medium">
        <Anchor label='Contact' hoverIndicator />
        <Anchor label='What is this?' hoverIndicator />
      </Nav>
      <Grid
      rows={['75vh']}
      columns={['1/2', '1/2']}
      gap="none"
      areas={[
          { name: 'left', start: [0, 0], end: [0, 0] },
          { name: 'right', start: [1, 0], end: [1, 0] }
      ]}
      >
        <Box gridArea="left" alignContent="center" justify="center">
          <Heading margin="small" textAlign="center">We're coming soon</Heading>
          <Text margin="medium" textAlign="center">If you're having issues quickly getting your team members set up with business tools, please leave your e-mail below so we can get in touch!</Text>
          <SubscribeForm/>
        </Box>
        <Box gridArea="right">
          <Carousel controls="selectors" play={5000} fill>
            <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
          </Carousel>
        </Box>
      </Grid>
    </Grommet>
  );
}
