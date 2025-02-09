import { useEffect, useState } from 'react';
// import FavouriteSlipsList from './components/FavouriteSlipsList';
// import AdviceSlip from './components/AdviceSlip';

function AdviceSection() {
  const [adviceRandom, setAdviceRandom] = useState({})
  const [adviceFavourite, setAdviceFavourite] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json();
    setAdviceRandom(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveToFavourites = () => {
    if (adviceRandom && adviceRandom.slip) {
      setAdviceFavourite([...adviceFavourite, adviceRandom.slip]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {/*<AdviceSlip adviceRandom={adviceRandom}/>*/}
        {adviceRandom && adviceRandom.slip ? (
          <section>
          <h3>Some Advice</h3>
          <p>{adviceRandom.slip.advice}</p>
          <button onClick={fetchData}>Get More Advice</button>
          <button onClick={saveToFavourites}>Save to Favourties</button>  
        </section>
        ) : (
          <p>Loading advice...</p>
        )}
      </section>
      <section className="favourtite-slips-list">
        {/*<FavouriteSlipsList adviceFavourite={adviceFavourite}/>*/}
        <section>
           <h3>Favourite Advice Slips</h3>
          <ul>
            {adviceFavourite.length > 0 ? (
              adviceFavourite.map((slip, index) => (
              <li key={index}>{slip.advice}</li>
            ))
          ) : (
            <p>no favourtites yet</p>
          )} 
          </ul> 
        </section>
      </section>
    </section>
  )
}

export default AdviceSection
