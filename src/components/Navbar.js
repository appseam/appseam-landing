import { Header, Anchor, Box, Nav } from 'grommet'
import ALink from './Link'

import SignUpBtn from './SignUpBtn'
import ComingSoonTip from './ComingSoonTip'

export default function ANav() {
    return (
        <Header>
            <ALink to='/'>
                <Box background={{'image': 'url(/site-logo.png)', 'size': 'contain', 'opacity': 'medium'}} height='60px' width='70px' margin='30px 0 0 30px'/>
            </ALink>
            <Nav direction="row-reverse" pad="medium" align='center'>
            <SignUpBtn/>
            <ALink to={{pathname: '/', hash: '#contact'}}>
                <Anchor label='Contact' hoverIndicator />
            </ALink>
            <ComingSoonTip>
                <ALink to='/explore'>
                    <Anchor label='Explore Bundles' hoverIndicator />
                </ALink>
            </ComingSoonTip>
            <ComingSoonTip>
                <Anchor label='Blog' href='#' hoverIndicator />
            </ComingSoonTip>
            <ALink to={{pathname: '/', hash: '#about'}}>
                <Anchor label='What is this?' hoverIndicator />
            </ALink>
            </Nav>
        </Header>
    )
}