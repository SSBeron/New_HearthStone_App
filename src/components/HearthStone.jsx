import axios from "axios";
import { useState, useEffect } from "react";

function HearthstoneInfo() {
const [cards, setCards] = useState([])

  const options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    headers: {
      'X-RapidAPI-Key': '7e864495fdmsh342238470c2916cp1f09aajsn220cda1c2490',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  };

useEffect(() => {
  axios.request(options)
    .then((res) => {
    setCards(res.data)
      console.log(res.data);

    })
    .catch(function (err) {
      console.error(err);
    });
  }, []);

   if (cards.length === 0) {
  return <div>Loading...</div>;
}


  return (
  <div>
    <h2>Hearthstone Information:</h2>
    {cards.classes.map((card, index) => (
      <div key={index}>
        <h3>{card}</h3>
        {/* <h3>Class: {card.classes}</h3> */}
      </div>
    ))}
  </div>
);

}

export default HearthstoneInfo;


{/* {cards.factions.map((card, index) => (
  <div key={index}>
    <h3>{card}</h3>
  </div>
))} */}