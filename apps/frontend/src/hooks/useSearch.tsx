import { useState } from "react";
import * as searchService from "../services/searchService";
import { useNavigate } from "react-router-dom";

// this hook handles the state of a search component
export function useSearch() { 
    const [searchValue, setSearchValue] = useState<string>("");

    // passes validation to the search service
    function trySearch(): {isValid: boolean, errors: string[]} {
        const validation = searchService.validateSearch(searchValue);
      
        return validation;
    };

    const [searchMessages, setSearchMessages] = useState<string[]>([]);
    const navigate = useNavigate()

    // Takes the path of the search and uses navigate to open to that page with the results(the router needs to be set up)
    const newPageSearch = (path: string) => {
        const validation = trySearch();
        if(validation.isValid) {
            navigate(`${path}/search?value=${searchValue}`);
            setSearchMessages([]);
            setSearchValue("");
        } else {
            setSearchMessages(validation.errors);
        }
    }
    return { 
        searchValue,
        setSearchValue,
        searchMessages,
        setSearchMessages,
        trySearch,
        newPageSearch,
    };
}