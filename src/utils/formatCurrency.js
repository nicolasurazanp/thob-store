export const formatCOP = (value) => {
    const amount = Number(value) || 0;
    const formattedAmount = new Intl.NumberFormat('es-CO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

    return `$${formattedAmount}`;
};
