import type { User } from  "../../../../shared/types/user";
import type { CreateUserDTO } from "../../../../shared/types/createUser";
import * as userRepo from "../repository/userRepo";

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

class ValidationError extends Error {
    public errors: string[];

    constructor(errors: string[]) {
        super(errors.join(" "));
        this.errors = errors;

        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

function validateName(value: string, field: string): ValidationResult {
    const errors: string[] = [];

    if (!value || value.trim().length < 3) {
        errors.push(`${field} needs at least 3 characters.`);
    }

    return {
        isValid: errors.length === 0,
        errors,
    }
}

export const validateUserName = (userName: string) =>
    validateName(userName, "User Name");

export const addUser = async (user: CreateUserDTO): Promise<User> => {
    const trimmedName = user.userName.trim();

    const { errors } = validateUserName(trimmedName);

    if (errors.length > 0) {
        throw new ValidationError(errors);
    }

    const users = await userRepo.getUsers();

    const exists = users.some(
        u => u.userName.toLowerCase() === trimmedName.toLowerCase()
    );

    if (exists) {
        throw new ValidationError(["User already exists."]);
    }

    return userRepo.addUser({ userName: trimmedName });
};