import { Button, Rate, Tag } from "antd";
import React from "react";

import Meat from "../../common/Assets/Icons/meat.png";
import Leaf from "../../common/Assets/Icons/leaf.png";
import Fish from "../../common/Assets/Icons/fish.png";
import { getColor } from "../../../common/Utils";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const getIcon = (value) => {
    if (value === "Meat") {
      return Meat;
    } else if (value === "Fish") {
      return Fish;
    } else {
      return Leaf;
    }
  };
  const { image, name, level, rating, type, kcal, min, pro, title, desc } =
    item;
  const navigate = useNavigate();
  return pro ? (
    <div className="pro-card card">
      <div className="pro-tag">
        <span>PRO</span>
      </div>
      <div className="pro-content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  ) : (
    <div className="card" onClick={() => navigate("/food_prep")}>
      <div className="img-box">
        <img alt="card" src={image} />
      </div>

      <h4>{name}</h4>
      <Tag color={getColor(level)}>{level}</Tag>
      <div className="details">
        <div>
          <span>{min}</span>
          <span>Min</span>
        </div>
        <div>
          <span>{kcal}</span>
          <span>Kcal</span>
        </div>
        <div>
          <img src={getIcon(type)} alt={type} />
          <span>{type}</span>
        </div>
      </div>
      <Rate className="rating" disabled allowHalf defaultValue={rating} />
      <Button>Start Cooking</Button>
    </div>
  );
}
