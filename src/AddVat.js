const AddVat = (props) => {
    const value = props.value || 100;
    const vat = props.vat || 22;

    const total = value + (value/100) * vat;

    return <span>{total}</span>
};

export {AddVat};