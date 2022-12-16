const Element = ({ element }) => {
    return (
        < div className="element" >
            <h4>{element.atomicNumber}.{element.name}</h4>
            <p><b> Standard State: </b>{element.standardState}</p>
        </div>
    )
}


export default Element;