import React from "react";

function Affiche({ categorie, paniers, setPaniers }) {
  return (
    <div>
      {categorie.meals.map((item) => {
        return (
          <div
            onClick={() => {
              let isFound = false;
              const newPaniers = [...paniers];
              for (let i = 0; i < paniers.length; i++) {
                if (paniers[i].id === item.id) {
                  newPaniers[i].quantity++;
                  setPaniers(newPaniers);
                  isFound = true;
                  break;
                }
              }
              if (isFound === false) {
                newPaniers.push({
                  id: item.id,
                  quantity: 1,
                  title: item.title,
                  price: item.price,
                });
                setPaniers(newPaniers);
              }
            }}
            className="affiche"
            key={item.id}
          >
            <div className="menu">
              <h4>{item.title}</h4>
              <p>{item.description ? item.description : null}</p>
              <div>
                <span className="price">{item.price} £ </span>
                <span className="populaire">
                  {item.popular === true ? "⭐️ POPULAIRE" : ""}
                </span>
              </div>
            </div>

            <img
              className={item.picture ? "image-menu" : "hidden"}
              src={item.picture}
              alt="meal"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Affiche;
