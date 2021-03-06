import React from 'react'
// import SignUpForm from './SignUpForm'
// import { Box, Form, FormField, TextInput, Button } from 'grommet'
// import { AddCircle } from 'grommet-icons'
import {
    Layer,
    Box,
    Button,
    Form,
    FormField,
    TextInput,
    Select
} from 'grommet'

export default function SignUpBtn() {
    const [showSignUp, setShowSignUp] = React.useState(false);
    const [orgSize, setOrgSize] = React.useState('1-5')
    const [industry, setIndustry] = React.useState('SaaS')

    const orgSizes = ['1-5', '5-10', '10-50', '50+']
    const industries = ['SaaS', 'Consultancy', 'Education', 'Online Store', 'Other']

    return (
      <Box>
        <Button label="Sign Up" primary onClick={() => setShowSignUp(true)} />
        {showSignUp && (
          <Layer
            margin='small'
            onEsc={() => setShowSignUp(false)}
            onClickOutside={() => setShowSignUp(false)}
          >
            <Box pad="40px" overflow='auto'>
                <Form>
                    <FormField required label='Your org name' name="org-name" htmlfor="org-name-input">
                        <TextInput id="org-name-input" name="org-name" placeholder='Seamster Ltd'/>
                    </FormField>
                    <FormField required label='Owner full name' name="org-owner-full-name" htmlfor="org-owner-full-name-input">
                        <TextInput id="org-owner-full-name" name="org-owner-full-name" placeholder='Your full name'/>
                    </FormField>
                    <FormField required label='Owner e-mail address' name="org-owner-email" htmlfor="org-owner-email-input" info="Don't worry, you can add more owners when you sign up!">
                        <TextInput id="org-owner-email-input" name="org-owner-email" placeholder='you@seamster.com'/>
                    </FormField>
                    <FormField required label='Organisation size' name="org-stage" htmlfor="org-stage-input">
                        <Select
                            id="org-stage-input"
                            options={orgSizes}
                            value={orgSize}
                            onChange={({ option }) => setOrgSize(option)}
                        />
                    </FormField>
                    <FormField required label='Org Type' name="org-type" htmlfor="org-type-input">
                        <Select
                            id="org-type-input"
                            options={industries}
                            value={industry}
                            onChange={({ option }) => setIndustry(option)}
                        />
                    </FormField>
                    <Box direction="row-reverse" gap="medium" align='start' height='50px' pad='small'>
                        <Button label="Cancel" onClick={() => setShowSignUp(false)} />
                        <Button primary type="submit" label="Sign me up, Scotty!" />
                    </Box>
                </Form>
            </Box>
          </Layer>
        )}
      </Box>
    );
  }