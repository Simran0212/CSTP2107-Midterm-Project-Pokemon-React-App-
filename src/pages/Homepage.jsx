import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Table from "../components/Table"


const URL = 'https://pokeapi.co/api/v2/pokemon/';

const Homepage = () => {
    const [pokemonData, setPokemonData] = useState([]);
    
    const getPokemonData = async () => {
        const data = await fetch(URL);
        const dataInJSON = await data.json();
        setPokemonData(dataInJSON);
        console.log(dataInJSON);
    }
    useEffect(() => {
        getPokemonData();
    }, []);
    
    const navigate  = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

  return (
    <div>
      <h1>Welcome to the Pokemon Homepage</h1>
      <Table data={pokemonData.results}></Table>
    </div>
  )
}

export default Homepage
