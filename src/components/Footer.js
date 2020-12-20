import { Favorite } from 'grommet-icons'
import { Footer } from 'grommet'

export default function AFooter() {
    return (
        <Footer size='small' pad='large' align='center' justify='center' background={{'color': 'black', 'opacity': 'weak'}}>
            Made with <Favorite color='#DE2B37'/> by Appseam
        </Footer>
    )
}