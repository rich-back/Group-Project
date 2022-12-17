
const SingleElement = ({ elementToView }) => {
    return (
        < div className="element" >
            
            <h4>{elementToView.atomicNumber}.{elementToView.name}</h4>
            <p><b> Standard State: </b>{elementToView.standardState}</p>
            
        </div>
    );
};


export default SingleElement;