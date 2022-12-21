import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getElementInformation } from "../services/WikidataService";

const SingleElement = ({ elementToView }) => {
    const [wikidata, setWikidata] = useState(null);

    useEffect(() => {
        if (!elementToView || !elementToView.atomicNumber)
            return;
        getElementInformation(elementToView.atomicNumber)
            .then(info => setWikidata(info));
    }, [elementToView]);

    const imgItem = !(wikidata && wikidata.image) ? null :
        <img
            className="SingleElement-picture"
            alt={`${elementToView.name}`}
            src={wikidata.image}
        />;

    let classes = [];
    classes.push('state-' + elementToView.standardState);
    classes.push('type-' + elementToView.bondingType);
    classes.push('groupBlock-' + elementToView.groupBlock);
    classes = classes.map(className => className.replace(" ", "-"));

    return (
        <article className={`SingleElement ${classes.join(" ")}`}>
            <h3>{elementToView.atomicNumber}. {elementToView.name}</h3>
            <p><Link to="/periodictable">Back to the table</Link></p>
            <div className="element-with-picture">
                <ul className="element-properties">
                    <li><h4>Standard State: </h4><span>{elementToView.standardState || "unknown"}</span></li>
                    <li><h4>Atomic Mass: </h4><span>{elementToView.atomicMass || "unknown"}</span></li>
                    <li><h4>Electron Configuration: </h4><span>{elementToView.electronicConfiguration || "unknown"}</span></li>
                    <li><h4>Group block: </h4><span>{elementToView.groupBlock}</span></li>
                    <li><h4>Year discovered: </h4><span>{elementToView.yearDiscovered}</span></li>
                </ul>
                {imgItem}
                <div className="element-description">
                    <h4>Description:</h4>
                    { elementToView.description ? <p>{elementToView.description}</p> :
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim culpa cumque quidem non fuga recusandae incidunt ab et in vel reiciendis quam quaerat, assumenda, odio ipsa, laboriosam iste officiis animi?</p> }
                </div>
            </div>
        </article>
    );
};


export default SingleElement;