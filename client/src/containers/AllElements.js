import React from "react";
import Element from "../components/Element";

const AllElements = ({ allElements }) => {
    if (!allElements) return <h2>Loading</h2>
    const elementsList = allElements.map((element) => {
        return (
            <>
                <Element element={element} key={element._id} />
            </>
        )
    });
    return (
        <>
            {elementsList}
        </>
    );
}
export default AllElements;