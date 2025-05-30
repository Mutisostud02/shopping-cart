import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const myStyle = {
  color: "black",
};
export default function Cards({ selected }) {
  const { data, loading, error } = useStoreData();

  if (loading) {
    return <p style={myStyle}>Loading...</p>;
  }
  if (error) {
    return <p style={myStyle}>Server Error</p>;
  }

  return (
    <div className={styles.cardContainer}>
      {data.map((item) => (
        <CardContent item={item} key={item.id}/>        
      ))}
    </div>
  );
}

function CardContent({item}) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(item.price)
  function handleAddClick() {
    setCount(count => count + 1);
  }
  function handlePrevClick() {
    if(count > 1) {
    setCount(count => count - 1);
    }
  }
  return (
    <div key={item.id} className={styles.cards}>
      <img className={styles.img} src={item.image}></img>
      <Link to="/DescriptionPage">description</Link>
      <p className={styles.title}>{item.title}</p>
      <div className={styles.quantity}>
        <p value={count} className={styles.displayCount}>
          Quantity: <span className={styles.count}>{+" " + count}</span>
        </p>
        <button onClick={handleAddClick}>+</button>
        <button onClick={handlePrevClick}>-</button>
      </div>
      <p>Price: ${count * item.price}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
}

export function useStoreData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.status >= 401) {
          throw new Error("Server Error!");
        }
        const data = await response.json();
        setData(data);
        // console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { data, loading, error };
}
