
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getElement} from "../ElementsService"
import SingleElement from "../components/SingleElement";

const SElementContainer = () => {

    const {id} = useParams();
    //need catch

    const [element, setElement] = useState([]);
    
    useEffect(() => {
        getElement(id)
      .then(element => setElement(element));
    }, []);
    
    // const getFilteredElement = function(allElements){
    //     const filteredElement = allElements.filter((element)=>{
    //         return element._id===id
    //     });
    //     return filteredElement
    // };
    
    // const elementToView = getFilteredElement(allElements)[0]
    // console.log(elementToView)

    return (
        <>
        <SingleElement  elementToView = {element}/>
        </>
        );
};

export default SElementContainer;

