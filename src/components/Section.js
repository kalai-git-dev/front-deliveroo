import React from "react";
import Affiche from "./Affiche";

function Section({ data, paniers, setPaniers }) {
  return (
    <div>
      {data.categories.map((categorie, index) => {
        return (
          <div key={index}>
            <h2
              className={data.categories.meals === undefined ? "h2" : "hidden"}
            >
              {categorie.name}
            </h2>

            <div className="section">
              <Affiche
                categorie={categorie}
                paniers={paniers}
                setPaniers={setPaniers}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
