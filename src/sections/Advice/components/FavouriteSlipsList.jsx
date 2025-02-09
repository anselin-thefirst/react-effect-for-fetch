import { useState, useEffect } from "react";

function FavouriteSlipsList({adviceFavourite}) {

    {/*const [advice, setAdvice] = useState([]);
    useEffect(() => {
        const adviceURL = adviceFavourite.advice 

        if (adviceURL) {
            fetch(adviceURL)
            .then((res) => res.json())
            .then((data) => setAdvice(data))
        }
    }, [adviceFavourite])*/}

    return (
        <section>
           <h3>Favourite Advice Slips</h3>
          <ul>
            <li>{adviceFavourite.advice}</li>
          </ul> 
        </section>
    )
}

export default FavouriteSlipsList