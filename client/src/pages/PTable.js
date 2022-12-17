import React from "react";
import AllElements from "../containers/AllElements";

const PTable = ({ allElements }) => (
    <>
        <h2>The Periodic Table</h2>
        <AllElements allElements={allElements} />
    </>
);

export default PTable;