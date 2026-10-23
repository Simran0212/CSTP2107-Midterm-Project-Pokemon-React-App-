import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonDetailspage = () => {
    const data = useParams();
    const [pokemonInfo, setPokemonInfo] = useState({});

  return (
    <div>
      
    </div>
  )
}

export default PokemonDetailspage
