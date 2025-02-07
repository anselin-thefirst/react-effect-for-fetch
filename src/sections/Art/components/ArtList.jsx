import ArtListItem from './ArtListItem';

function ArtList({art}) {
    //let index = 0;
    return (
        <ul className="art-list">
            {art &&
            art.map((artwork, index) => {
                console.log(artwork)
                return <ArtListItem key={index} artwork={artwork} /> 
            })}
        </ul>
    )
}

export default ArtList