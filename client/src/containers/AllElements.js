import React from "react";
import Element from "../components/Element";

const AllElements = ({ allElements }) => {
    if (!allElements) return <h2>Loading</h2>
    const elementsList = allElements.map((element) => {
        return (
            
            <ul>
                <Element element={element} key={element._id} />
            </ul>
        )
    });
    return (
        <>
            {elementsList}
        </>
    );
}
export default AllElements;