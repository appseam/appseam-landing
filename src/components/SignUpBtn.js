import React from 'react'
import firebaseApp from  '../firebaseApp'
import postJson from '../lib/postData'
import {
    Layer,
    Box,
    Button,
    Form,
    FormField,
    TextInput,
    Select
} from 'grommet'


function createOrg(value) {
    const email = value['org-owner-email']
    const password = value['password']

    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            firebaseApp.auth().currentUser.updateProfile({
                organisation: value['org-name'],
                isOwner: true
            })
        })
        .then((res) => {
            postJson('http://localhost:5000/api/organisation', {
                'name': value['org-name'], 
                'industry': value['org-type'],
                'apps': []
            })
        })
        .catch((err) => console.log(err))
}       


export default function SignUpBtn() {
    const [showSignUp, setShowSignUp] = React.useState(false);
    const [orgName, setOrgName] = React.useState('')
    const [orgOwnerFullName, setOrgOwnerFullName] = React.useState('')
    const [orgOwnerEmail, setOrgOwnerEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
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
            <Box pad="40px" overflow='auto' >
                <Form onSubmit={({ value }) => createOrg(value)} >
                    <FormField required label='Your org name' name="org-name" htmlfor="org-name-input">
                        <TextInput id="org-name-input" name="org-name" placeholder='Seamster Ltd' value={orgName} onChange={e => setOrgName(e.target.value)}/>
                    </FormField>
                    <FormField required label='Owner full name' name="org-owner-full-name" htmlfor="org-owner-full-name-input">
                        <TextInput id="org-owner-full-name" name="org-owner-full-name" placeholder='Your full name' value={orgOwnerFullName} onChange={e => setOrgOwnerFullName(e.target.value)}/>
                    </FormField>
                    <FormField required label='Owner e-mail address' name="org-owner-email" htmlfor="org-owner-email-input" info="Don't worry, you can add more owners when you sign up!">
                        <TextInput id="org-owner-email-input" name="org-owner-email" placeholder='you@seamster.com' value={orgOwnerEmail} onChange={e => setOrgOwnerEmail(e.target.value)}/>
                    </FormField>
                    <FormField required label='Password' name="password" htmlfor="password-input">
                        <TextInput id="password-input" type="password" name="password" placeholder='Password' secureTextEntry={true} value={password} onChange={e => setPassword(e.target.value)}/>
                    </FormField>
                    <FormField required label='Confirm password' name="confirm-password" htmlfor="confirm-password-input" >
                        <TextInput id="confirm-password-input" type="password" name="confirm-password" placeholder='Confirm password'/>
                    </FormField>
                    <FormField required label='Organisation size' name="org-stage" htmlfor="org-stage-input">
                        <Select
                            name="org-stage"
                            id="org-stage-input"
                            options={orgSizes}
                            value={orgSize}
                            onChange={({ option }) => {setOrgSize(option)}}
                        />
                    </FormField>
                    <FormField required label='Org Type' name="org-type" htmlfor="org-type-input">
                        <Select
                            name="org-type"
                            id="org-type-input"
                            options={industries}
                            value={industry}
                            onChange={({ option }) => {setIndustry(option)}}
                        />
                    </FormField>
                    <Box direction="row-reverse" gap="medium" align='start' height='50px' pad='small'>
                        <Button label="Cancel" onClick={() => {setShowSignUp(false)}} />
                        <Button primary type="submit" label="Sign me up, Scotty!" />
                    </Box>
                </Form>
            </Box>
          </Layer>
        )}
      </Box>
    );
  }