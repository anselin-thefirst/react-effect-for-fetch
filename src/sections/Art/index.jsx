import { useEffect, useState } from 'react';
import ArtList from './components/ArtList';

function ArtsSection() {
  const [art, setArt] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
    .then (res => res.json())
    .then (data => {setArt(data);})
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList art={art}/>
      </div>
    </section>
  )
}

export default ArtsSection
