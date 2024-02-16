/* eslint-disable react/prop-types */

export const Episode = ({id, name, fetchEpisode}) => {
  return (
    <div className="card__episode">
        <button onClick={ () => fetchEpisode(id)} className="link">
            {`${id} ${name}`}
        </button>
    </div>
  )
}
