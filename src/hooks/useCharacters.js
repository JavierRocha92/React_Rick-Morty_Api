import { useState, useEffect } from "react";
import { fetchCharacters } from '../logic/fetch.js'
export const useCharacters = () => {
    const [characters, setCharacters] = useState(null)
    const getUsers = () => {
        fetchCharacters().then(newCharacters => setCharacters(newCharacters))
    }

    useEffect(() => {
        getUsers()
    }, [])
    return characters
}