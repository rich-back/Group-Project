import React, { useState } from "react";
import PeriodicTable from "../components/PeriodicTable";
import Element from "../components/Element";

const AllElements = ({ allElements }) => {
    const [selectedElement, setSelectedElement] = useState(null);

    if (!allElements)
        return <h2>Loading</h2>;

    return <>
        { selectedElement && <Element element={selectedElement} /> }
        <PeriodicTable elements={allElements} setSelectedElement={setSelectedElement} />
    </>
}
export default AllElements;