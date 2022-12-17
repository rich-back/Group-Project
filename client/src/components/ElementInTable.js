import styled, { css } from 'styled-components';

const PositionedElement = styled.div`
    --periodic-table-row: ${(props) => props.row};
    --periodic-table-column: ${(props) => props.column};
`;

const ElementInTable = ({element, setSelectedElement}) => {
    const row = 1;
    const column = element.atomicNumber;

    return (
        <PositionedElement
                className="ElementInTable"
                row={row} column={column}
                onClick={(e)=>setSelectedElement(element)}
            >
            {element.atomicNumber}{" - "}
            {element.symbol}{" - "}
            {element.groupBlock}
        </PositionedElement>
    );
};

export default ElementInTable;