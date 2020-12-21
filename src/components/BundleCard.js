import { Box, Heading } from 'grommet'

import AppCard from './AppCard'

export default function BundleCard({ children, apps, name }) {
    return (
        <Box elevation='small' round='small' pad='medium' background='brand-1'>
            <Heading level={4} truncate={true} margin='5px 0px 15px 0px'>{name}</Heading>
            <Box direction='row' align='start' gap='small'>
            {apps.map((app, index) => {
                return <AppCard key={index} name={app.presentable_name} icon={app.app_icon}/>
            })}
            </Box>
        </Box>
    )
}