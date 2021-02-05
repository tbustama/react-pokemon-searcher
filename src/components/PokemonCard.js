import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    console;
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };
  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img
              alt="oh no!"
              src={
                this.state.clicked
                  ? this.props.pokemon.sprites.back
                  : this.props.pokemon.sprites.front
              }
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
