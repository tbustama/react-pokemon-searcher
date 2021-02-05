import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    filter: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then((pokemon) =>
        this.setState({
          pokemon: pokemon,
        })
      );
  }

  createPokemon = (e) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        hp: e.target.hp.value,
        sprites: {
          front: e.target.frontUrl.value,
          back: e.target.backUrl.value,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((pokemon) =>
        this.setState({
          pokemon: [...this.state.pokemon, ...pokemon],
        })
      );
  };
  handleFilter = (e) => {
    let filtered = this.state.pokemon.filter((poke) => {
      return poke.name.startsWith(e.target.value);
    });
    this.setState({
      filter: filtered,
    });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
        <br />
        <Search handleFilter={this.handleFilter} />
        <br />
        <h1>Hello From Pokemon Collection</h1>
        <PokemonCollection
          pokemon={
            this.state.filter.length > 0
              ? this.state.filter
              : this.state.pokemon
          }
        />
      </Container>
    );
  }
}

export default PokemonPage;
