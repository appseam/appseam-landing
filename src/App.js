import React from 'react';
import {
  Box,
  Grommet, 
  Nav, 
  Anchor, 
  Grid, 
  Carousel, 
  Image, 
  Heading, 
  Text,
  FormField,
  Form,
  TextInput,
  Button
 } from 'grommet'

const theme = {
  global: {
    colors: {
      'purple': '#4d3b5f',
      'yellow': '#ffd42a',
      'white': '#ffffff',
      'brand': '#ffffff'
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
  button: {
    border: {
      color: '#ffffff'
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

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


function SubscribeForm() {
  function sendToNetlify(val) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "subscribe", val})
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  };
  
  return (
    <Box pad="40px">
      <Form onSubmit={({ value }) => {sendToNetlify(value)}}>
        <input type="hidden" name="form-name" value="subscribe" />
        <FormField name="email" htmlfor="email-input" label="E-mail">
          <TextInput id="email-input" name="email" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
        </Box>
      </Form>
    </Box>
  );
}


export default function App() {
  return (
    <Grommet theme={theme} background='purple' full={true}>
      <Nav direction="row-reverse" pad="medium">
        <Anchor label='Contact' hoverIndicator />
        <Anchor label='About' hoverIndicator />
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
          <Carousel controls="selectors" play="5000" fill>
            <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
            <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
          </Carousel>
        </Box>
      </Grid>
    </Grommet>
  );
}
