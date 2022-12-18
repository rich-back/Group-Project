import styled, { css } from 'styled-components';
import { elementPosition } from '../utilities/element_position';

const PositionedElement = styled.div`
    --periodic-table-row: ${(props) => props.row};
    --periodic-table-column: ${(props) => props.column};
`;

const ElementInTable = ({element, setSelectedElement}) => {
    const {row, column} = elementPosition(element);

    return (
        <PositionedElement
                className="ElementInTable"
                row={row} column={column}
                onMouseOver={(e)=>setSelectedElement(element)}
            >
            {element.atomicNumber}{" - "}
            {element.symbol}{" - "}
            {element.groupBlock}
        </PositionedElement>
    );
};

export default ElementInTable;