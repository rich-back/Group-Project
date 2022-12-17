import ElementInTable from "./ElementInTable";

import "./PeriodicTable.css";

const PeriodicTable = ({elements, setSelectedElement}) => {
    const elementsList = elements.map((element) => {
        return <ElementInTable element={element} key={element._id} setSelectedElement={setSelectedElement} />
    });
    return (
        <div className="PeriodicTable">
            {elementsList}
        </div>
    );
};

export default PeriodicTable;