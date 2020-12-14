import React from 'react'
import SubscribeForm from './components/SubscribeForm'
import InlineAnchor from './components/InlineAnchor'
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
        <Box background={{'image': 'url(/site-logo.png)', 'size': 'contain', 'opacity': 'medium'}} height='60px' width='70px' margin='30px 0 0 30px'/>
        <Nav direction="row-reverse" pad="medium">
          <Anchor label='Contact' href='#contact' hoverIndicator />
          <Anchor label='What is this?' href='#about' hoverIndicator />
        </Nav>
      </Header>
      <Grid
      rows={['75vh', 'auto', 'auto']}
      columns={['1/2', '1/2']}
      gap="none"
      areas={[
          { name: 'subscribe-form', start: [0, 0], end: [0, 0] },
          { name: 'carousel', start: [1, 0], end: [1, 0] },
          { name: 'about', start: [0, 1], end: [1, 1] },
          { name: 'contact', start: [0, 2], end: [1, 2] }
      ]}
      >
        <Box gridArea="subscribe-form" alignContent="center" justify="center">
          <Heading margin="small" textAlign="center">We're coming soon</Heading>
          <Text margin="medium" textAlign="center">If you're having issues quickly getting your team members set up with business tools, please leave your e-mail below so we can get in touch!</Text>
          <SubscribeForm/>
        </Box>
        <Box gridArea="carousel">
          <Carousel controls="selectors" play={5000} fill>
            <Image fit="contain" src="/screenshots/admin__client_main__mac-edu.png" />
            <Image fit="contain" src="/screenshots/admin__client_admin-settings_apps__mac-edu.png" />
            <Image fit="contain" src="/screenshots/admin__client_admin-settings_bundles_main__mac-edu.png" />
            <Image fit="contain" src="/screenshots/admin__client_admin-settings_bundles_view-bundle__mac-edu.png" />
          </Carousel>
        </Box>
        <Box gridArea="about" id="about" pad="medium" background={{'color': 'white', 'opacity': 'weak'}}>
          <Heading textAlign='center'>What is this?</Heading>
          <Text textAlign='center'>
            Appseam is a desktop application that helps teams manage their tool stack.
            Our aim is to provide an interface where you can manage tool installations and setups per team using bundles. 
            Instead of asking your team members to go through a checklist of activities to get them setup, you can use Appseam to automate these activities for you.
          </Text>
        </Box>
        <Box gridArea="contact" id="contact" pad="medium">
          <Heading textAlign='center'>Contact Us</Heading>
          <Text textAlign='center'>
            We're still trying to get things setup, but if your team has issues managing your team members' access and setup, or processing requests for new tools, we'd love to hear from you at <InlineAnchor href='mailto:general@appseam.com'>general@appseam.com</InlineAnchor>. Please get in touch letting us know of the biggest problem you're facing regarding business tool provisioning and what you'd like to see. We'll aim to get in touch within 24 hours to see how we can solve your problem.
          </Text>
        </Box>
      </Grid>     
    </Grommet>
  );
}
