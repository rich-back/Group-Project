import React from "react";
import AllElements from "../containers/AllElements";

const PTable = ({ allElements }) => (
    <main>
        <h2>The Periodic Table</h2>
        <AllElements allElements={allElements} />
    </main>
);

export default PTable;