export const fetchCharacters = () => {
    const url = 'https://rickandmortyapi.com/api/character'
    return fetch(url).then(response => response.json()).then(json => json.results)
}
export const fetchSingleCharacter = (url) => {
    return fetch(url).then(response => response.json()).then(json => json.image)
}
export const fetchEpisodes = () => {
    const url = 'https://rickandmortyapi.com/api/episode'
    return fetch(url).then(response => response.json()).then(json => json.results)
}
export const fetchSingelEpisode = (id) => {

    const url = `https://rickandmortyapi.com/api/episode/${id}`
     return fetch(url).then(response => response.json())

}
