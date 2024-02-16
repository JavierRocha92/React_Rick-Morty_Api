import { useCharacters } from "../hooks/useCharacters"
import { Actor } from "./Actor"
import '../css/ActorCard.css'
export const Actors = () => {
  const characters = useCharacters()
  return (
   
    <div className="container__characters">
      {characters && characters.map((character) => 
        <Actor key = {character.id} name = {character.name} specie = {character.species} image = {character.image}/>
      )}
    </div>
  )
}
