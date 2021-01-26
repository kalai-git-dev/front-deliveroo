import React from "react";

function Asside({ data, paniers, setPaniers }) {
  let total = 0;

  for (let i = 0; i < paniers.length; i++) {
    if (paniers.length === 0) {
      total = 0;
    } else {
      console.log(Number(paniers[i].price));
      total += Number(paniers[i].price) * paniers[i].quantity;
    }
  }
  return (
    <>
      <div className="asside">
        <button className="asside-button">Valider mon panier</button>
        {paniers.length === 0 ? (
          <p>le panier est vide !!</p>
        ) : (
          <div>
            {paniers.map((item, index) => {
              return (
                <>
                  <div key={item.id}>
                    <button
                      className="less"
                      onClick={() => {
                        const newPaniers = [...paniers];
                        // console.log(newPaniers[index]);
                        if (newPaniers[index].quantity === 1) {
                          newPaniers.splice(index, 1);
                          setPaniers(newPaniers);
                        } else {
                          newPaniers[index].quantity--;
                          setPaniers(newPaniers);
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="more"
                      onClick={() => {
                        const newPaniers = [...paniers];
                        // console.log(newPaniers[index]);

                        newPaniers[index].quantity++;
                        setPaniers(newPaniers);
                      }}
                    >
                      +
                    </button>
                    <span>{item.title}</span>
                    <span>{item.price} £ </span>
                  </div>
                </>
              );
            })}
          </div>
        )}
        <p>{total.toFixed(2)} £</p>
      </div>
    </>
  );
}

export default Asside;
