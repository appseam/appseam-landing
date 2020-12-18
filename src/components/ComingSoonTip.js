import { Tip, Box, Text } from 'grommet'

export default function ComingSoonTip({ children, ...rest }) {
    return (
        <Tip plain content={
            <Box 
                margin='small'
                round='xsmall'
                background={{color: 'white', opacity: 'weak'}}
                align='center'
                pad='small'
            >
                <Text color='white'>Coming soon!</Text>
            </Box>
        }>
            {children}
        </Tip>
    )
}