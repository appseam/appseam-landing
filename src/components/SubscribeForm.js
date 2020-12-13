import React from 'react'
import urlencode from '../lib/urlencode'
import { Box, Form, FormField, Text, TextInput, Button } from 'grommet'

export default function SubscribeForm() {  
    const [submitted, setSubmitted] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [submittedEmail, setSubmittedEmail] = React.useState('')
  
    function sendToNetlify(val) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlencode({ "form-name": "appseam-early-subscriptions", ...val})
      })
        .then(res => { 
          setSubmitted(true)
          setSubmittedEmail(val.email)
        })
        .catch(error => alert(error));
    };
    
    return (
      <Box pad="40px">
        <Form onSubmit={({ value }) => {sendToNetlify(value)}}>
          <input type="hidden" name="form-name" value="appseam-early-subscriptions"/>
          <FormField name="email" htmlfor="email-input">
            <TextInput id="email-input" name="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
          </FormField>
          <Box direction="row" gap="medium" align='start' height='50px'>
            <Button disabled={!(email)} primary type="submit" label="Subscribe" />
            {submitted && (<Text color="accent-1">Thanks! You've registered with {submittedEmail}. We'll reach out to you as soon as we can.</Text>)}
          </Box>
        </Form>
      </Box>
    );
}