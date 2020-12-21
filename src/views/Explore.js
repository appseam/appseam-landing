import React from 'react'
import { Box } from "grommet";

import { get } from '../lib/httpUtils'
import BundleCard from '../components/BundleCard';

export default function Explore() {
    const [bundles, setBundles] = React.useState([])

    React.useEffect(() => {
        get('http://localhost:5000/api/bundles')
            .then(res => {
                setBundles(res.data)
            })
    }, [])

    return (
        <Box gap='small' pad='medium'>
            {bundles.map((bundle, index) => (<BundleCard key={index} name={bundle.name} apps={bundle.apps} />))}
        </Box>
    )
}