/**
 * This Service function handles the validation for the friendsInput
 * for the friendsForm.
 * @param userName - string - the userName that has been entered into friendsForm
 * @returns 
 * - string: if valid will add the userName to the friends list and
 * show string "Form is valid!"
 * - error: if invalid will return string "User Name needs at least 3 characters."
 */
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