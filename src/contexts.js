import { createContext, useState } from 'react'
import { get } from './lib/httpUtils'

export const BundlesContext = createContext([])

export function BundlesProvider({ children }) {
    const [bundles, setBundles] = useState([])

    function refreshBundles() {
        get('http://localhost:5000/api/bundles')
            .then(res => {
                setBundles(res.data)
            })
    }

    return (
        <BundlesContext.Provider value={{ bundles, refreshBundles }}>
            {children}
        </BundlesContext.Provider>
    )
}