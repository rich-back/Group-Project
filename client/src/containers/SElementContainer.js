import React from "react";
import { useParams } from "react-router-dom";
import SingleElement from "../components/SingleElement";

const SElementContainer = ({ allElements }) => {

    const {id} = useParams();
    
    
    if (!allElements) return <h2>Loading</h2>
    
    const getFilteredElement = function(allElements){
        const filteredElement = allElements.filter((element)=>{
            return element._id===id
        });
        return filteredElement
    };
    
    const elementToView = getFilteredElement(allElements)[0]
    console.log(elementToView)

    return (
        <>
        <SingleElement  elementToView = {elementToView}/>
        </>
        );
};

export default SElementContainer;

