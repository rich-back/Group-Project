import { Link } from "react-router-dom";

const Element = ({ element }) => {
    return (
        < div className="element" >
            
            <Link to={`/periodictable/${element.name}`}><h4>{element.atomicNumber}.{element.name}</h4></Link>
            <p><b> Standard State: </b>{element.standardState}</p>
            
        </div>
    )
}


export default Element;