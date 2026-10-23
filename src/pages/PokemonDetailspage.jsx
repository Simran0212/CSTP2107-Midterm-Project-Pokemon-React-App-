import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonDetailspage = () => {
    const data = useParams();
    const [pokemonInfo, setPokemonInfo] = useState({});

    const PokemonDetailsData = async () =>
    {
        const result = await fetch(URL + data.pokemonName.toLowerCase());
        const resultInJson = await result.json();
        setPokemonInfo(resultInJson);
        console.log(resultInJson);
    }
    useEffect(() => {
        PokemonDetailsData();
    }, [data]);


    return (
    <div className='rounded overflow-hidden shadow-lg w-screen'>
        <div className='font-bold text-xl mb-2'> Name: {pokemonInfo.name}</div>
        <p className='text-gray-700 text-base'>
            Abilites: {pokemonInfo.abilties}
        </p>    
        <div className='px-6 pt-4 pb-2'>
            {
                pokemonInfo.abilties?.map((ability) => {
                return (
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{ability}</span>
                
                )
            } )
        }
        </div>
    </div>

  )
}

export default PokemonDetailspage
