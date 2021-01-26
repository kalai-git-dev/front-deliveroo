import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Asside from "./components/Asside";

import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [paniers, setPaniers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-2020.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return (
    <div className="App">
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <>
          <Header data={data} />
          <main className="container-main">
            <Section data={data} paniers={paniers} setPaniers={setPaniers} />
            <Asside paniers={paniers} setPaniers={setPaniers} />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
