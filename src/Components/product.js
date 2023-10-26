import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
const Product = () => {
  const [item, setItem] = useState(ProductInfo);
  const [cakeitem, setcakeItem] = useState(ProductInfo[0]);
  const [positem, setpos] = useState(0);
  const slectCake = (pos) => {
    setcakeItem(ProductInfo[pos]);
    setpos(pos);
  };
  return (
    <>
      <div className="container">
        <h1>Baking Shop</h1>
        <p className="cakeheading">
          La patisserie qui a le goût de la différence.
        </p>{" "}
        <br />
        <p className="dsc">
          Bienvenue dans notre boutique en ligne de pâtisserie.
          <br /> Vous trouverez sur Baking Shop un large choix de gâteau, de
          cake...et tout ce dont vous aurez besoin pour réussir à coup sûr vos
          évènements.
          <br /> Quelle que soit la saison, Baking-Shop vous accompagne pour
          tous vos desserts de fête, pour vos gâteaux de Pâques, d'anniversaire,
          de mariage...
        </p>
        <div className="cakeContainer">
          {item.map((item, pos) => {
            const arr = ["classimg"];
            if (pos === positem) {
              arr.push("classimgBorder");
            }
            return (
              <img
                className={arr.join(" ")}
                src={item.image}
                alt=""
                onClick={() => {
                  slectCake(pos);
                }}
              ></img>
            );
          })}
        </div>
        <div className="cakeInfo">
          <h1>{cakeitem.name}</h1>
          <img src={cakeitem.image} alt="" />
          <p>{cakeitem.descripion}</p>
          <div className="cakePrice">
            <h4>
              Prix: <span className="pricebg">{cakeitem.price}</span>
            </h4>
            <h4>
              <span className="ratebg">{cakeitem.rating}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
