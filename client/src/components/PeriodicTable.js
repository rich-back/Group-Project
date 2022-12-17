import { useState } from 'react';

import ElementInTable from "./ElementInTable";
import Element from "../components/Element";

import "./PeriodicTable.css";

const PeriodicTable = ({elements}) => {
    const [hoverElement, setHoverElement] = useState(null);

    const elementsList = elements.map((element) => {
        return <ElementInTable element={element} key={element._id} setHoverElement={setHoverElement} />
    });

    const hoverItem = <Element element={hoverElement} />

    const labelItems = [
        <div className="lanthanides-label" key="lanthanides-label">Lanthanides</div>,
        <div className="actinides-label" key="actinides-label">Actinides</div>
    ];

    return (
        <div className="PeriodicTable">
            {labelItems}
            {hoverItem}
            {elementsList}
        </div>
    );
};

export default PeriodicTable;