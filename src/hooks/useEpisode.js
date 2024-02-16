import { fetchSingelEpisode } from "../logic/fetch"
import {  useState } from "react"

export const useEpisode = () => {
    const [episode, setEpisode] = useState(null)

    const getSingleEpisode = (id = false) => {

        fetchSingelEpisode(id).then(newEpisode => setEpisode(newEpisode))
    }
    return [episode, getSingleEpisode]
}
