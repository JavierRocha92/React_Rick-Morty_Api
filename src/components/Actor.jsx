/* eslint-disable react/prop-types */


export const Actor = ({name, specie, image}) => {
  return (
    <div className='actor'>
        <img className='actor__image' src={image} alt="" />
        <div className="actor__info">
            <p className="actor__name">
                {name}
            </p>
            <p className="actor__specie">
                {specie}
            </p>
        </div>
    </div>
  )
}
