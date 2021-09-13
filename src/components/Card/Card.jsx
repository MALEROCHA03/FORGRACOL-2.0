import React from 'react'

function Card({props}){
  
const imageUrl = `https://image.tmdb.org/t/p/w300${props.poster_path}`


return(
<div className="COMPONENTE HIJO">
      <img src={imageUrl} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.genre_ids}</h3>


</div>


)

}
export default Card