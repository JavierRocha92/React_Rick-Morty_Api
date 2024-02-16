import { useState, useEffect } from "react";
import { fetchEpisodes } from '../logic/fetch.js'
export const useEpisodes = () => {
    const [episodes, setEpisodes] = useState(null)
    const getEpisodes = () => {
        fetchEpisodes().then(newEpisodes => setEpisodes(newEpisodes))
    }

    useEffect(() => {
        getEpisodes()
    }, [])
    return episodes
}