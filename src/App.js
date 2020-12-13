import React from 'react'
import SubscribeForm from './components/SubscribeForm'
import theme from './theme'
import {
  Header,
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


export default function App() {
  return (
    <Grommet theme={theme} background='brand-1' full={true}>
      <Header>
        <Box background={{'image': 'url(/site-logo.png)', 'size': 'contain'}} height='60px' width='70px' margin='30px 0 0 30px'/>
        <Nav direction="row-reverse" pad="medium">
          <Anchor label='Contact' hoverIndicator />
          <Anchor label='What is this?' hoverIndicator />
        </Nav>
      </Header>
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
            <Image fit="contain" src="/screenshots/admin__client_main__mac-edu.png" />
            <Image fit="contain" src="/screenshots/admin__client_admin-settings_apps__mac-edu.png" />
            <Image fit="contain" src="/screenshots/admin__client_admin-settings_bundles_main__mac-edu.png" />
            <Image fit="contain" src="/screenshots/admin__client_admin-settings_bundles_view-bundle__mac-edu.png" />
          </Carousel>
        </Box>
      </Grid>
    </Grommet>
  );
}
