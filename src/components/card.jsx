import { useState } from "react";

const minQuantity = 1;
const maxQuantity = 100;

export default function Card({product}) {
  return (
    <div className={"card"}>
      <ImageHolder
        className={"product-image"}
        url={product.image}
        title={product.title}
      />
      <div className={"product-title"}>{product.title}</div>
      <div className={"product-price"}>{`${product.price}$`}</div>
      <AddCardProductToCart />
    </div>
  );
}

function ImageHolder({className, url, title}) {
  const [ loaded, setLoaded ] = useState(false);

  return ( 
    <div className={className}>
      {
        !loaded && <div className={"loader"}></div>
      }
      <img
        src={url}
        alt={title}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function AddCardProductToCart() {
  const [ quantity, setQuantity ] = useState(minQuantity);

  function handleDecreaseQuantity() {
    if (quantity > minQuantity)
      setQuantity(quantity - 1);
  }

  function handleIncreaseQuantity() {
    if (quantity < maxQuantity)
      setQuantity(quantity + 1);
  }

  function handleChangeQuantity(e) {
    const value = e.target.value;
    if (value > maxQuantity)
      setQuantity(maxQuantity);
    else if (value < minQuantity)
      setQuantity(minQuantity);
    else
      setQuantity(value);
  }

  return (
    <div className={"product-add"}>
      <div className={"decrease"}>
        <button onClick={handleDecreaseQuantity}/>
      </div>
      <div className={"quantity"}>
        <input
          type={"number"}
          name={"product-quantity"}
          value={quantity}
          min={minQuantity}
          max={maxQuantity}
          onChange={handleChangeQuantity}
        />
      </div>
      <div className={"increase"}>
        <button onClick={handleIncreaseQuantity}/>
      </div>
    </div>
  );
}
