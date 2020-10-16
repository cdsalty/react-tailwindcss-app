import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';
import './App.css';

const App = () => {

  const [cards, setCards] = useState([])

  return (
    <div>
      <h1 className="flex flex-col">
        <div className="flex justify-center bg-blue-300">
          <h1 className="text-3xl text-white py-2">Pokemon Search</h1>
        </div>
        <div className="flex flex-col">
          <SearchForm setCards={setCards} />
          <CardList cards={cards} />
        </div>
      </h1>
    </div>
  );
}

export default App;


/*
#7400B8
#6930C3
#5E60CE
#5390D9
#4EA8DE
#48BFE3
soltis: {
    "100": "#7400B8",
    "200": "6930C3",
    "300": "5E60CE",
    "400": "5390D9",
    "500": "4EA8DE",
    "600": "48BFE3"
  }

*/