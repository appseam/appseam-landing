import { Box, Text } from 'grommet'

export default function AppCard({ children, name, icon }) {
    let box_bkg_opts = {"position": "center", "image": `url(${icon})`}

    return (
        <Box pad='6px' align='center' justify='center' width='70px' >
            <Box round='xsmall' background={icon ? box_bkg_opts : 'accent-1'} width='60px' height='60px'/>
            <Text textAlign='center' size='10px'>{name}</Text>
        </Box>
    )
}