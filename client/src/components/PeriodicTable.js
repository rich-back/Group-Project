import { useState } from 'react';

import ElementInTable from "./ElementInTable";
import ElementHoverInfo from "../components/ElementHoverInfo";

import "./PeriodicTable.css";

const PeriodicTable = ({elements}) => {
    const [hoverElement, setHoverElement] = useState(null);

    const elementsList = elements.map((element) => {
        return <ElementInTable element={element} key={element._id} setHoverElement={setHoverElement} />
    });

    const hoverItem = <ElementHoverInfo element={hoverElement} />

    const labelItems = [
        <div className="lanthanides-label" key="lanthanides-label">Lanthanides</div>,
        <div className="actinides-label" key="actinides-label">Actinides</div>
    ];

    return <>
        <div className="TableKey">
            <h4>Key for table:</h4>
            <div>Unknown state =</div>
            <div className="key-item state-state-unknown"></div>
            <div>Solid non-metal =</div>
            <div className="key-item state-solid"></div>
            <div>Solid metal =</div>
            <div className="key-item type-metallic"></div>
            <div>Liquid =</div>
            <div className="key-item state-liquid"></div>
            <div>Gas =</div>
            <div className="key-item state-gas"></div>
        </div>
        <div
                className="PeriodicTable"
                onMouseLeave={(e)=>setHoverElement(null)}
            >
            {labelItems}
            {hoverItem}
            {elementsList}
        </div>
    </>;
};

export default PeriodicTable;