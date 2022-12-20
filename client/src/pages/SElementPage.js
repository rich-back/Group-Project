
import React from "react";
import SElementContainer from "../containers/SElementContainer";

const SElementPage = ({allElements}) => {


    
    return(
    <main>
        <h2>Element Details</h2>
        <SElementContainer allElements ={allElements}/>
        
    </main>
    );
};

export default SElementPage;