const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (!isNaN(Number(values.username))) {
        errors.username = 'Must be not a number'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.city) {
        errors.city = 'Required'
    } else if (!isNaN(Number(values.city))) {
        errors.city = 'Must be not a number'
    }
    if (!values.postal_code) {
        errors.postal_code = 'Required'
    } else if (values.postal_code.length === 6) {
        errors.postal_code = 'Must be 6 characters'
    } else if (isNaN(Number(values.postal_code))) {
        errors.postal_code = 'Must be a number'
    }
    return errors
};

export default validate;