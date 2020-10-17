import React from 'react'


const SearchForm = () => {

  return (
    <div>
      <p className="text-green-600">SearchForm</p>
    </div>
  )
}

export default SearchForm;


// import React, { useEffect } from 'react'
// import axios from 'axios';


// const SearchForm = ({ setCards }) => {
//   useEffect(() => {
//     fetchFormData();
//     // eslint-disable-next-line
//   }, []);

//   const fetchFormData = async () => {
//     try {
//       const url = `https://api.pokemontcg.io/v1/cards?pageSize=50`; // max 50 results
//       const { data } = await axios.get(url);
//       // we need to call setCards and pass in the data we're after
//       setCards(data);
//     } catch (error) {
//       console.log(error)
//     }
//   }


//   return (
//     <div>
//       <p className="text-green-600">SearchForm</p>
//     </div>
//   )
// }

// export default SearchForm;
