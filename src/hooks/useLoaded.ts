import { useEffect, useState } from 'react'

// * Custom hook to detect if component is rendered on client
export const useLoaded = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => setLoaded(true), [])
    return loaded
}
