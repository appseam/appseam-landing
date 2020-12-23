import { useContext, useEffect } from 'react'
import { Box } from "grommet";

import BundleCard from '../components/BundleCard';

import { BundlesContext } from '../contexts'

export default function Explore() {
    const { bundles, refreshBundles } = useContext(BundlesContext)

    useEffect(() => {
        const undefinedBundles = !Array.isArray(bundles) || !bundles.length
        if (undefinedBundles) {
            refreshBundles()
        }
    }, [])

    return (
        <Box gap='small' pad='medium'>
            {bundles.map((bundle, index) => (<BundleCard key={index} name={bundle.name} apps={bundle.apps} />))}
        </Box>
    )
}