import { useState } from "react";

const useFormInput = (validateValue: (value: string) => { isValid: boolean; errors: string[] }) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [errors, setErrors] = useState<string[]>([]);

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    const inputReset = () => {
        setEnteredValue("");
        setErrors([]);
    };

    const validate = () => {
        const result = validateValue(enteredValue);
        setErrors(result.errors);
        return result.isValid;
    };

    return {
        value: enteredValue,
        errors,
        valueChangeHandler,
        inputReset,
        validate,
    };
};

export default useFormInput;
