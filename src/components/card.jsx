import { useState } from "react";

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
      <div className={"product-add"}>
      </div>
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

