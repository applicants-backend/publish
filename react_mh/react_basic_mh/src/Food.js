import { Component } from "react";
import PropTypes from "prop-types";

class Food extends Component {
  render() {
    const { food } = this.props;

    return (
      <>
        <div>
          아 <span>{food} </span>먹고싶다.{" "}
        </div>
      </>
    );
  }
}

Food.defaultProps = {
  food: "비비큐 크리스피 치킨",
};

Food.propTypes = {
  food: PropTypes.string,
};

export default Food;
