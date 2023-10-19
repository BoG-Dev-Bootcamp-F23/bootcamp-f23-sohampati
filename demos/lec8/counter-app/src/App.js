import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  // const [index, setIndex] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const res = await fetch(API_URL + 1);
    const newData = await res.json();

    setData(newData);
    setLoading(false);
  }

  // fetch data at beginning
  useEffect(() => {
    getData();
  }, []);

  // update data whenever index changes
  // useEffect(() => {
  //   getData();
  // }, [index]);

  return (
    <>
      <div>Bulbasaur name fetcher:</div>
      {loading ? <div>Loading...</div> : <div>Pokemon Name: {data?.name} </div>}
      {/* <button
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        -1
      </button> */}
    </>
  );

  // return <div className="App">{/* <Counter /> */}</div>;
}

export default App;
