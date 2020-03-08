import React from "react";
import Card from "../Card/Card";

import "./Carousel.css";

export default class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1,
      coords: {
        x: 0,
        y: 0
      }
    };
  }

  scrollHandler = type => {
    let multplier = 1;

    if (type === "left") {
      multplier = 1;
    } else {
      multplier = -1;
    }

    this.setState(state => {
      let cardSize = this.props.cards.length;
      let finalPosition = state.coords.x + multplier * state.speed * 400;
      if (finalPosition > 100 && type === "left") {
        finalPosition = 0;
      } else if (type === "right" && finalPosition <= -1 * (cardSize -3) * 400) {
        finalPosition = -1 * (cardSize - 3) * 400;
      }
      return {
        coords: {
          ...state.coords,
          x:
            type === "left"
              ? Math.max(0, finalPosition)
              : Math.min(0, finalPosition)
        }
      };
    });
  };

  render() {
    const { coords } = this.state;
    const { cards } = this.props;
    return (
      <div className={"Carousel"}>
        <div className={"Carousel__Scroll"}>
          <div
            className={"Carousel__InnerScroller"}
            style={{
              transform: `translate(${coords.x}px, ${coords.y}px)`
            }}
          >
            {cards.map((i, index) => (
              <Card key={`card-${index}`} />
            ))}
          </div>
        </div>
        <div className="Carousel__NavContainer">
          <div
            className="Carousel__Nav Carousel__NavLeft"
            onClick={() => this.scrollHandler("left")}
          >
            <i className="Carousel__NavIcon fas fa-chevron-left"></i>
          </div>
          <div
            className="Carousel__Nav Carousel__NavRight"
            onClick={() => this.scrollHandler("right")}
          >
            <i className="Carousel__NavIcon fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  cards: []
};
