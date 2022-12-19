import { Link } from "react-router-dom";

const ElementHoverInfo = ({ element }) => {
    if (!element)
        return <div className="element element-blank">Hover over an element to see more information.<br/>Click an element to read about it.</div>;

    return (
        <div className="element">
            <Link to={`/periodictable/element/${element._id}`}><h4>{element.atomicNumber}. {element.name}</h4></Link>
            <ul className="element-properties">
                <li><b>Standard State:</b><span>{element.standardState || "unknown"}</span></li>
                <li><b>Atomic Mass:</b><span>{element.atomicMass || "unknown"}</span></li>
                <li><b>Electron Configuration:</b><span>{element.electronicConfiguration || "unknown"}</span></li>
                <li><b>Group block:</b><span>{element.groupBlock}</span></li>
                <li><b>Year discovered:</b><span>{element.yearDiscovered}</span></li>
            </ul>
        </div>
    )
}


export default ElementHoverInfo;