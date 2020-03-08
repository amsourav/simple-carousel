import React from "react";
import "./Card.css";

import { currencyFormatter } from "../../Utils/currencyFormatter";
import TagContainer from "../TagContainer/TagContainer";
import Tag from "../Tag/Tag";

const Card = ({ main = false, image, title, price, tags = [] }) => (
  <div className={`Card ${main && "CardMain"}`}>
    <div className="ImageContainer">
      <img className="Image" src={image} alt={title}></img>
    </div>
    <div className={"ProductDetails"}>
      <div className="ProductDetails__Left">
        <div className={"ProductTitle"}>{title}</div>
        <div className={"ProductPrice"}>{price}</div>
      </div>
      <div className="ProductDetails__Right">
        <TagContainer>
          {tags.map(tag => (
            <Tag message={tag} />
          ))}
        </TagContainer>
      </div>
    </div>
  </div>
);

Card.defaultProps = {
  main: false,
  image: "https://picsum.photos/400/300?blur=1",
  title: "Offer",
  price: currencyFormatter.format(Math.ceil(Math.random(new Date()) * 1000)),
  tags: ["grocery", "50% off"]
};

export default Card;
