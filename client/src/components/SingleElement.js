import { useState, useEffect } from 'react';
import { getElementInformation } from "../services/WikidataService";

const SingleElement = ({ elementToView }) => {
    const [wikidata, setWikidata] = useState(null);

    useEffect(() => {
        getElementInformation(elementToView.atomicNumber)
            .then(info => setWikidata(info));
    }, [elementToView]);

    const imgItem = !(wikidata && wikidata.image) ? null :
        <img
            className="SingleElement-picture"
            alt={`${elementToView.name}`}
            src={wikidata.image}
        />;

    return (
        <div className="SingleElement">
            
            <h4>{elementToView.atomicNumber}. {elementToView.name}</h4>
            <ul className="element-properties">
                <li><b>Standard State: </b><span>{elementToView.standardState || "unknown"}</span></li>
                <li><b>Atomic Mass: </b><span>{elementToView.atomicMass || "unknown"}</span></li>
                <li><b>Electron Configuration: </b><span>{elementToView.electronicConfiguration || "unknown"}</span></li>
                <li><b>Group block: </b><span>{elementToView.groupBlock}</span></li>
                <li><b>Year discovered: </b><span>{elementToView.yearDiscovered}</span></li>
            </ul>
            {imgItem}
            <p><code>{ JSON.stringify(wikidata) }</code></p>
        </div>
    );
};


export default SingleElement;