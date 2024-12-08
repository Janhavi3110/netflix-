import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useParams } from 'react-router-dom';

const Player = () => {
  const {id} = useParams();

const[apiData,setApiData]=useState({
  name:"",
  key:"",
  published_at:"",
  typeof:""
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTFlYTg5MDMwZTA3NDNlMzdlY2ZiOTQwMTNlMzIxMiIsIm5iZiI6MTczMTc3NjA0MS45MjgyNjY1LCJzdWIiOiI2NzM4YzRjMTYyNGE4NWI4ODk5ZWE5YmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i2p6TOJHsRGlPCj7uk3j93yc41HmAk2p4dSrfzCD5MM'
    }
  };
  
  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
},[])
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt=''/>
      <iframe width='90%' height='90%'
       src={`https://www.youtube.com/embed/${apiData.key}`} title='trailor' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player