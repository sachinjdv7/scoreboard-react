import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
class Player extends PureComponent {
  static propTypes = {
    scoreChange: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
  };
  render() {
    const { id, name, score, index, removePlayer, scoreChange } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} index={index} scoreChange={scoreChange} />
      </div>
    );
  }
}

export default Player;
