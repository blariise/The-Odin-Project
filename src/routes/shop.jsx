import { useState, useEffect } from "react";

import Card from "./../components/card.jsx";

export default function Shop() {
  const [ products, setProducts ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      
      if (!response.ok) {
        setIsError(true);
        return;
      }

      const data = await response.json();
      setProducts(data);
      setError(null);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <>
    {"Shop"}
    {
      loading 
        ? <h1>Loading...</h1>
        : <CardsContainer products={products} />
    }
    </>
  );
}

function CardsContainer({products}) {
  return (
    <ol>
    {
      products.map((product) => {
        return (<li key={product.id}>{product.title}</li>)
      })
    }
    </ol>
  );
}

