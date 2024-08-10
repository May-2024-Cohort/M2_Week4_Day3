import {useEffect,useState} from 'react'

import axios from "axios"

import { Link } from 'react-router-dom'



function Movies() {
    
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/movies')
        .then((allMovies)=>{
            setMovies(allMovies.data)
        })
        .catch((err)=>{console.log(err)})
    },[])
  return (
    <div>
        <h1>Movies</h1>

        {movies.map((oneMovie)=>{
            return(
                <div key={oneMovie.id}>
                    <h2>{oneMovie.movieTitle}</h2>
                    <Link to={`/movies/${oneMovie.id}`}>Go To Movie Details</Link>
                </div>
            )
        })}
    </div>
  )
}

export default Movies