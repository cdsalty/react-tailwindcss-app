import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchForm from './components/SearchForm';

import axios from 'axios';
import './App.css';


const App = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // API CALL
  const fetchData = async () => {
    try {
      const url = `https://api.pokemontcg.io/v1/cards?pageSize=50`;
      const data = await axios.get(url);
      // const response = data;  // returns an object with the data inside. I need the data inside data and then the cards.
      const response = data.data.cards;
      // console.log(response);
      setCards(response);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center bg-blue-600 background-div-properties">
        <h1 className="text-3xl text-white py-2 text-properties">Pokemon Search</h1>
      </div>
      <div className="flex flex-col">
        <SearchForm />
        <CardList cardData={cards} />
      </div>
    </div>
  );
}

export default App;

