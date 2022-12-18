
import React from "react";
import SElementContainer from "../containers/SElementContainer";

const SElementPage = ({allElements}) => {


    
    return(
    <>
        <h2>Element Details</h2>
        <SElementContainer allElements ={allElements}/>
        
    </>
    );
};

export default SElementPage;