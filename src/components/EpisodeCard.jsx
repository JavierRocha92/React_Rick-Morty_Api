/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useCharacter } from "../hooks/useCharacter";

export const EpisodeCard = ({ id, name, characters }) => {
  const getSingleCharacter = useCharacter();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImagesCharacters = async () => {
      //Array para guardar todas las imagenes de los personajes
      const images = [];
      //Bucle para recorrer todas las urls y descargar imagenes de cada una de ellas
      for (const character of characters) {
        //Descargo la imagen con la funcion de descargarme un personaje por id y la puseo en el array de imagenes
        const image = await getSingleCharacter(character);
        images.push(image);
      }
      //Una vez cargadas todas las imagenes gracias al await,  seteamos los valores en el estado de imagenes, tambien seteamos el valor
      //loading a false para indicar que las imagenes ya no se estan cargando, para poder pintarlas
      setImages(images);
      setLoading(false);
    };
    fetchImagesCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="episodeCard">
      <h1 className="episodeCard__title"> Capitulo: {id}</h1>
      <h3 className="episodeCard__name">{name}</h3>
      <div className="episodeCard__content d-flex">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
            ) : (
          images.map((image, index) => {
            return (
              <img
                className="episodeCard__image"
                key={index}
                src={image}
                alt=""
              />
            );
          })
        )}
      </div>
    </div>
  );
};
