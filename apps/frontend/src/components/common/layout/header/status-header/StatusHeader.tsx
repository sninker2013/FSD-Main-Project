import "./StatusHeader.css"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "../../Nav/Nav";

import { useStatus } from "../../../../hooks/useStatus";

import { SearchBar } from "../../../search-bar/SearchBar";
import { useSearch } from "../../../../../hooks/useSearch";

import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"

export function StatusHeader() {
    const { 
        searchValue,
        setSearchValue,
        searchMessages,
        setSearchMessages,
        newPageSearch,
    } = useSearch();

    const location = useLocation();


    useEffect(() => {
        setSearchValue("");
        setSearchMessages([]);
    }, [location]);

    return (
        <header>
        <div className="headerBar">
        <SearchBar
            searchValue={searchValue}
            messages={searchMessages}
            handleSearchChange={setSearchValue}
            handleSubmit={() => newPageSearch("/games")}/>
        <h1>GameStars</h1>
        < Status />
        </div>
        <Nav />
        </header>
    );
}

// TODO give these functions their own files
export function Status() {
    return(
        <div className="status">
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
                <SetStatus />
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
        </div>
    )
}

function SetStatus() {
    const {
        status, updateStatus,
        lockStatus, lockUnlock,
        clearButtonVisible,
        buttonLogic
    } = useStatus()
    
    return (
    <form id="status-form">
        <textarea 
            placeholder="Click to set your status!"
            maxLength={128}
            cols={32}
            rows={4}
            readOnly={lockStatus}
            value={status}
            onChange={e => updateStatus(e.target.value)}
            onClick={() => lockUnlock(false)}>
        </textarea>

        <input type="button"
        value={lockStatus ? "Clear Status": "Submit"}
        style={{ visibility: clearButtonVisible ? "visible" : "hidden"}}
        onClick={() => {
            buttonLogic()
        }}
        />
    </form>
    );
}