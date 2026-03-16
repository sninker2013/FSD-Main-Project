export function validateSearch(searchValue: string):{
    isValid: boolean;
    errors: string[];
} {
    let isValid = true;
    const errors: string[] = [];

    if(searchValue.trim().length < 2) {
        isValid = false;
        errors.push("Cannot search for fewer than two characters."); 
    }

    return {isValid, errors};
}