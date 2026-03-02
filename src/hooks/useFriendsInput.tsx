import { useState } from "react";

/**
 * Custom hook for managing the inputting a new friend into the friend list.
 * 
 * This hook handles:
 * - Inputting username into the friend form
 * 
 * @param validateValue - which will use the friend service to apply validation to the friends form
 * valid if the username is longer than 3 characters, and invalid if it is shorter than 3 characters
 * @returns 
 * - success: string - "Form is valid!"
 * - error: string - "User Name needs at least 3 characters."
 */

const useFriendsInput = (validateValue: (value: string) => { isValid: boolean; errors: string[] }) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [errors, setErrors] = useState<string[]>([]);

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    /**
     * setEnteredValue - sets the input value if it manages to pass validation
     * setErrors - sets an error if the input value fails validation.
     */

    const inputReset = () => {
        setEnteredValue("");
        setErrors([]);
    };

    /**
     * inputReset - used to reset the setEnteredValue and setErrors so that
     * Sets both to empty
     */

    const validate = () => {
        const result = validateValue(enteredValue);
        setErrors(result.errors);
        return result.isValid;
    };

    /**
     * validate - uses the friendsService to check if the entered value is valid
     * setErrors if the input fails validation
     * returns result.isValid if the input passes validation.
     */

    // Return the value, error state, valueChangeHandler, inputReset, and validate 

    return {
        value: enteredValue,
        errors,
        valueChangeHandler,
        inputReset,
        validate,
    };
};

export default useFriendsInput;
