import React from "react";

function Asside({ paniers, setPaniers }) {
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
          <p className="panier-empty">le panier est vide !!</p>
        ) : (
          <div>
            {paniers.map((item, index) => {
              return (
                <>
                  <div key={index} id="product" key={item.id}>
                    <div className="bloc-icons">
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
                    </div>
                    <div className="bloc-rigth">
                      <span className="product-title">{item.title}</span>
                      <span className="product-price">
                        {(Number(item.price) * item.quantity).toFixed(2)} £
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
        <p className="total">Total :{total.toFixed(2)} £</p>
      </div>
    </>
  );
}

export default Asside;
