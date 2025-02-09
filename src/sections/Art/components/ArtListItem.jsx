import {useEffect, useState} from "react";

function ArtListItem({artwork}) {
    const [publications, setPublications] = useState([]);
    useEffect(() => {
        const publicationsURL = artwork.publications 

        if (publicationsURL) {
            fetch(publicationsURL)
            .then((res) => res.json())
            .then((data) => setPublications(data))
        }
    }, [artwork])

    return (
        <li>
            <div className="frame">
                <img src={'https://boolean-uk-api-server.fly.dev/' + artwork.imageURL}></img>
            </div>
            <h3>{artwork.title}</h3>
            <h4>{artwork.artist}</h4>
                {publications && (
                    <ul>
                        {publications.length > 0 ? (
                            publications.map((artwork, index) => (
                                <li key={index}>{artwork.publicationHistory}</li>
                            ))
                        ) : (
                            <p>no publications yet</p>
                        )}
                    </ul>
                )}
        </li>
    );
}

export default ArtListItem