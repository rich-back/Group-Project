
import React from "react";
import SElementContainer from "../containers/SElementContainer";

const SElemtentPage = ({allElements}) => {


    
    return(
    <>
        <h2>Element Details</h2>
        <SElementContainer allElements ={allElements}/>
        
    </>
    );
};

export default SElemtentPage;