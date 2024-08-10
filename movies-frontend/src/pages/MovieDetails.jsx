import {useState,useEffect} from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'

function MovieDetails() {

    const [movie,setMovie] = useState(null)

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/movies/${id}?_embed=actors`)
        .then((response)=>{
            setMovie(response.data)
            console.log(response.data)
        })
        .catch(err=>{console.log(err)})
    },[])
  return (
    <div>
        {movie && (
            <div>
                <h1>{movie.movieTitle}</h1>
                <p>{movie.rating}</p>
                <b>All Actors:</b>
                <ol >
                {movie.actors.map((oneActor)=>{
                    return(
                        
                            <li key={oneActor.id}>{oneActor.name}</li>
                    )
                })}
                                        </ol>

            </div>
            
        )}
    </div>
  )
}

export default MovieDetails