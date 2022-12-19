import PeriodicTable from "../components/PeriodicTable";

const AllElements = ({ allElements }) => {
    if (!allElements)
        return <h2>Loading</h2>;

    return <>
        <PeriodicTable elements={allElements} />
    </>
}
export default AllElements;