import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';

import axios from 'axios';
import './App.css';

const App = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchFormData();
    // eslint-disable-next-line
  }, []);

  const fetchFormData = async () => {
    try {
      const url = `https://api.pokemontcg.io/v1/cards?pageSize=50`; // max 50 results
      const { data } = await axios.get(url);
      // we need to call setCards and pass in the data we're after
      // setCards(data);
      setCards(data.cards);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h1 className="flex flex-col">
        <div className="flex justify-center bg-blue-600">
          <h1 className="text-3xl text-white py-2">Pokemon Search</h1>
        </div>
        <div className="flex flex-col">
          <SearchForm />
          <CardList data={cards} />

        </div>
      </h1>
    </div>
  );
}

export default App;

