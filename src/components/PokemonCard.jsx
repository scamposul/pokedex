import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  const toDetail = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  const style = `card ${pokemon.types?.[0].type.name}`;

  return (
    <div onClick={toDetail} className={style}>
      <img src={pokemon.sprites?.front_default} alt="" />
      <br />
      <h3>{pokemon.name}</h3>
      <b>
        Types: {pokemon.types?.[0]?.type.name}, {pokemon.types?.[1]?.type.name}
      </b>
      <br />
      <div className="stats">
        <b>{pokemon.stats?.[0].stat.name}</b>: {pokemon.stats?.[0].base_stat}
        <b>{pokemon.stats?.[1].stat.name}</b>: {pokemon.stats?.[1].base_stat}
        <b>{pokemon.stats?.[2].stat.name}</b>: {pokemon.stats?.[2].base_stat}
        <b>{pokemon.stats?.[3].stat.name}</b>: {pokemon.stats?.[3].base_stat}
        <b>{pokemon.stats?.[4].stat.name}</b>: {pokemon.stats?.[4].base_stat}
        <b>{pokemon.stats?.[5].stat.name}</b>: {pokemon.stats?.[5].base_stat}
      </div>
    </div>
  );
};

export default PokemonCard;
