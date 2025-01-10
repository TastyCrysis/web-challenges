import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setError(false);

        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon");
        }

        const pokemon = await response.json();
        setPokemon(pokemon.results);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPokemon();
  }, []);

  if (error) {
    return <p>Sorry, no Pokémon found.</p>;
  }

  if (!pokemon) {
    return null;
  }

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
