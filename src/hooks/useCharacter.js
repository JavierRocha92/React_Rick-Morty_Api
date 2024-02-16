import { fetchSingleCharacter } from "../logic/fetch"
// import {  useState } from "react"

export const useCharacter = () => {
    // const [character, setCharacter] = useState(null)

    const getSingleCharacter = async (id) => {

        return await fetchSingleCharacter(id)
    }
    return getSingleCharacter
}
