import { useState } from "react";
import type { CreateUserDTO } from "../../../../shared/types/createUser";
import * as userService from "../services/userService";

interface UseCreateUserFormResult {
    userName: string;
    errors: string[];
    success: string;
    valueChangeHandler: (field: string, value: string) => void;
    inputReset: () => void;
    validate: () => boolean;
    getUser: () => CreateUserDTO | null;
    submitUser: () => Promise<void>;
}

export const useCreateUserFormInput = (): UseCreateUserFormResult => {
    const [userName, setUserName] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState("");

    const runValidation = (): string[] => {
        const trimmed = userName.trim();
        return userService.validateUserName(trimmed).errors;
    };

    const valueChangeHandler = (field: string, value: string) => {
        if (field === "userName") setUserName(value);
        setSuccess("");
    };

    const inputReset = () => {
        setUserName("");
        setErrors([]);
        setSuccess("");
    };

    const validate = (): boolean => {
        const errors = runValidation();

        setErrors(errors);
        setSuccess(errors.length === 0 ? "Form is valid!" : "");

        return errors.length === 0;
    };

    const getUser = (): CreateUserDTO | null => {
        const trimmed = userName.trim();
        const errors = userService.validateUserName(trimmed).errors;

        if (errors.length > 0) return null;

        return { userName: trimmed };
    };

    const submitUser = async (): Promise<void> => {
        if (!validate()) return;

        const user = getUser();
        if (!user) return;

        try {
            await userService.addUser(user);

            setSuccess("User created successfully!");
            setErrors([]);
            inputReset();
        } catch (err: unknown) {
            const message =
                err instanceof Error ? err.message : "Failed to add user";

            setErrors([message]);
            setSuccess("");
        }
    };

    return {
        userName,
        errors,
        success,
        valueChangeHandler,
        inputReset,
        validate,
        getUser,
        submitUser,
    };
};