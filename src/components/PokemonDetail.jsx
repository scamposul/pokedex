import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  const styleBox = `pokemonBox ${pokemon.types?.[0].type.name}`;
  const styleType = `type ${pokemon.types?.[0].type.name}`;
  const styleType1 = `type1 ${pokemon.types?.[0].type.name}`;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
  }, [id]);

  const navigate = useNavigate();
  return (
    <div className={styleBox}>
<<<<<<< HEAD
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt="" width={"20%"} onClick={() => navigate("/pokedex")} />
=======
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt="" width={'20%'} onClick={() => navigate('/pokedex')}/>
>>>>>>> b1cce68a41bab75a3b43eb6817941548b3357118
      <div className="all">
        <div className="pokemonInfo">
          <div className="bigger">
            <div className="top">
              <div className="weight">
                <p>
                  <b>{pokemon.weight}</b>
                </p>
                <p>Weight</p>
              </div>
              <img
                src={pokemon.sprites?.other.dream_world.front_default}
                alt=""
                className="photo"
              />
              <div className="height">
                <p>
                  <b>{pokemon.height}</b>
                </p>
                <p>Height</p>
              </div>
            </div>
            <div className="middle">
              <div className="nameId">
                <h3>{pokemon.name} <b>#{id}</b></h3>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className={styleType}>
              <h3>Type</h3>
              <div className="rowTypes">
                <p className={styleType1}>{pokemon.types?.[0]?.type.name}</p>
                <p className="type2">{pokemon.types?.[1]?.type.name}</p>
              </div>
            </div>
            <div className="abilities">
              <h3>Abilities</h3>
              <div className="abilitiesSlots">
                <p className="ability1">
                  {pokemon.abilities?.[0]?.ability.name}
                </p>
                <p className="ability2">
                  {pokemon.abilities?.[1]?.ability.name}
                </p>
                <p className="ability3">
                  {pokemon.abilities?.[2]?.ability.name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="moves">
          <h3>Movements</h3>
          <ul>{pokemon.moves?.[0]?.move.name}</ul>
          <ul>{pokemon.moves?.[2]?.move.name}</ul>
          <ul>{pokemon.moves?.[3]?.move.name}</ul>
          <ul>{pokemon.moves?.[4]?.move.name}</ul>
          <ul>{pokemon.moves?.[5]?.move.name}</ul>
          <ul>{pokemon.moves?.[6]?.move.name}</ul>
          <ul>{pokemon.moves?.[7]?.move.name}</ul>
          <ul>{pokemon.moves?.[8]?.move.name}</ul>
          <ul>{pokemon.moves?.[9]?.move.name}</ul>
          <ul>{pokemon.moves?.[10]?.move.name}</ul>
          <ul>{pokemon.moves?.[11]?.move.name}</ul>
          <ul>{pokemon.moves?.[12]?.move.name}</ul>
          <ul>{pokemon.moves?.[13]?.move.name}</ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
