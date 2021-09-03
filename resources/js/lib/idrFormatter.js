export const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
export const changeCurrencyValue = (e, onChange = () => { }) => {
    const value = Number(e.target.value.replace(/[^0-9\,]+/g, "").replace(',', '.'));
    onChange({ target: { name: e.target.name, value } });
};