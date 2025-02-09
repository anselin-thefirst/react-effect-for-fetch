import { useEffect, useState } from 'react';
// import FavouriteSlipsList from './components/FavouriteSlipsList';
// import AdviceSlip from './components/AdviceSlip';

function AdviceSection() {
  const [adviceRandom, setAdviceRandom] = useState({})
  const [adviceFavourite, setAdviceFavourite] = useState([])

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then (res => res.json())
    .then (data => {setAdviceRandom(data);} )
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      setAdviceRandom(data)
    }
  })

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {/*<AdviceSlip adviceRandom={adviceRandom}/>*/}
        <section>
          <h3>Some Advice</h3>
          <p>{adviceRandom.slip.advice}</p>
          <button>Get More Advice</button>
          <button>Save to Favourties</button>  
        </section>
      </section>
      <section className="favourtite-slips-list">
        {/*<FavouriteSlipsList adviceFavourite={adviceFavourite}/>*/}
        <section>
           <h3>Favourite Advice Slips</h3>
          <ul>
            <li>{adviceFavourite.advice}</li>
          </ul> 
        </section>
      </section>
    </section>
  )
}

export default AdviceSection
