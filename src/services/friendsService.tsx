export function validateUserName(userName: string): {
    isValid: boolean;
    errors: string[];
} {
    const errors: string[] = [];

    if(userName.trim().length < 3) {
        errors.push("User Name needs at least 3 characters.");
    }

    return { 
        isValid: errors.length === 0,
        errors,
    };
}