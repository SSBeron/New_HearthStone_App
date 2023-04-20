import axios from "axios";
import { useState, useEffect } from "react";

function HearthstoneInfo() {
const [cards, setCards] = useState([])

  const options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
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
  {cards && cards.Battlegrounds.filter((card) => 
    card.img && card.type === "Hero" && 
    !([85, 374, 494, 617, 682, 899, 955,].includes(cards.Battlegrounds.indexOf(card)))
  ).map((card, index) => (
    <div className="box" key={index}>
      <h3>{card.name}</h3>
      <h3>{cards.Battlegrounds.indexOf(card)}</h3>
      <div><img src={card.img} alt="" /></div>
    </div>
  ))}
</div>

 );

}

export default HearthstoneInfo;

