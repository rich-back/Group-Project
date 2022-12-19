const rowLength = 18;
const seriesInfos = [
    { row: 1, column: 1,  firstElement: 1, length: 1 },
    { row: 1, column: -1, firstElement: 2, length: 1 },
    { row: 2, column: 1,  firstElement: 3, length: 2 },
    { row: 2, column: -6, firstElement: 5, length: 6 },
    { row: 3, column: 1,  firstElement: 11, length: 2 },
    { row: 3, column: -6, firstElement: 13, length: 6 },
    { row: 4, column: 1,  firstElement: 19, length: 18 },
    { row: 5, column: 1,  firstElement: 37, length: 18 },
    { row: 6, column: 1,  firstElement: 55, length: 3 },
    { row: 6, column: 4,  firstElement: 72, length: 15 },
    { row: 7, column: 1,  firstElement: 87, length: 3 },
    { row: 7, column: 4,  firstElement: 104, length: 15 },
    /* lanthanides and actinides */
    { row: 8, column: 3,  firstElement: 58, length: 14 },
    { row: 9, column: 3,  firstElement: 90, length: 14 },
];

export function elementPosition(element) {
    const { atomicNumber } = element;
    let seriesInfo = seriesInfos.find(info =>
        atomicNumber >= info.firstElement && atomicNumber < info.firstElement + info.length);
    
    if (!seriesInfo) {
        console.log("elementPosition can't locate", atomicNumber);
        return { row: 10, column: atomicNumber };
    }

    const { row, column: startColumn, firstElement } = seriesInfo;
    const column = startColumn + atomicNumber - firstElement
        + (startColumn < 0 ? rowLength + 1: 0);

    return { row, column };
}