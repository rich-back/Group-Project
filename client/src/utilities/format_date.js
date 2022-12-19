export const formatDateAsMonth = (date) => {
    const year = date.getFullYear();
    const monthZeroBased = date.getMonth();
    const month = monthZeroBased < 9 ? '0' + (monthZeroBased + 1) : monthZeroBased + 1;
    return `${year}-${month}`;
};