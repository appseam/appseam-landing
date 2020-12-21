import { Header, Anchor, Box, Nav } from 'grommet'

import SignUpBtn from './SignUpBtn'
import ComingSoonTip from './ComingSoonTip'

export default function ANav() {
    return (
        <Header>
            <Anchor href='/'>
            <Box background={{'image': 'url(/site-logo.png)', 'size': 'contain', 'opacity': 'medium'}} height='60px' width='70px' margin='30px 0 0 30px'/>
            </Anchor>
            <Nav direction="row-reverse" pad="medium" align='center'>
            <SignUpBtn/>
            <Anchor label='Contact' href='/#contact' hoverIndicator />
            <ComingSoonTip>
                <Anchor label='Explore Bundles' href="/explore" hoverIndicator />
            </ComingSoonTip>
            <ComingSoonTip>
                <Anchor label='Blog' href='#' hoverIndicator />
            </ComingSoonTip>
            <Anchor label='What is this?' href='/#about' hoverIndicator />
            </Nav>
        </Header>
    )
}