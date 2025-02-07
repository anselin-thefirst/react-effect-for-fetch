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
        <ul>
            <div className="frame">
                <img src={artwork.imageURL}></img>
            </div>
            <h3>{artwork.title}</h3>
            <h4>{artwork.artist}</h4>
                {publications && (
                    <ul>
                        {artwork.publicationHistory}
                    </ul>
                )}
        </ul>
    );
}

export default ArtListItem