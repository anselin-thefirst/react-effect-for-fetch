import {useEffect, useState} from 'react';

function AdviceSlip({adviceRandom}) {
//    const [randomAdvice, setAdvice] = useState(null)

//    useEffect(() => {
//        fetch('https://api.adviceslip.com/advice')
//        .then (res => res.json())
//        .then (data => {setAdvice(data);})
//      }, []);

    return (
        <section>
          <h3>Some Advice</h3>
          <p>{adviceRandom.slip.advice}</p>
          <button>Get More Advice</button>
          <button>Save to Favourties</button>  
        </section>
    )
}

export default AdviceSlip