import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { Navigate, useNavigate } from "react-router-dom";

const Pokedex = () => {
  const name = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [pokemonList, setPokemonList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [pokemon, setPokemon] = useState({});


  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1150&offset=0")
      .then((res) => setPokemonList(res.data.results));
  }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1150&offset=0")
      .then((res) => setPokemonList(res.data.results));

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTypeList(res.data.results));
      
  }, []);

  console.log(typeList);

  const searchName = () => {
    navigate(`/pokedex/${nameInput}`);
  };

  const searchType = (typeUrl) => {
    axios.get(typeUrl).then((res) => setPokemonList(res.data.pokemon));
  };

  const [page, setPage] = useState(0);
  const pokemonPerPage = 10;
  const firstPokemonIndex = page * pokemonPerPage;
  const lastPokemonIndex = firstPokemonIndex + pokemonPerPage;
  const pokemonPaginated = pokemonList.slice(firstPokemonIndex, lastPokemonIndex);

  const totalPages = Math.trunc(pokemonList.length / pokemonPerPage) - 1;
  const pagesNumbers = [];

  for(let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }

  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <p>Welcome {name}</p>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous page
      </button>
      {
        pagesNumbers.map(number => (
          <button onClick={() => setPage(number)} key={number}>{number}</button>
        ))
      }
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next Page
      </button>
      <br />
      <select onChange={(e) => searchType(e.target.value)}>
        {typeList.map((type) => (
          <option value={type.url} key={type.url}>
            {type.name}
          </option>
        ))}
      </select>
      <br />
      <input
        type="text"
        placeholder="search by name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        className='pokedexInput'
      />
      <button onClick={searchName}>Search</button>
      <ul className="list">
        {pokemonPaginated.map((pokemon) => (
          <li key={pokemon.url}>
            <PokemonCard
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
