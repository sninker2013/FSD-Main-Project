import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./StatusHeader.css"
import { Nav } from "../Nav/Nav";
import { SearchBar } from "../../search-bar/SearchBar";
import { useSearch } from "../../../../hooks/useSearch";

export function StatusHeader({
    status,
    updateStatus
}:
{
    status: string,
    updateStatus: React.Dispatch<React.SetStateAction<string>>
}) {
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
        < Status 
        status={status}
        updateStatus={updateStatus}
        />
        </div>
        <Nav />
        </header>
    );
}

// TODO give these functions their own files
export function Status({
    status,
    updateStatus
}:
{
    status: string,
    updateStatus: React.Dispatch<React.SetStateAction<string>>
}) {
    return(
        <div className="status">
            <img src={"/images/profilePics/silksong.png"} alt="reviewer profile picture" style={{width: "56px", height: "56px"}}/>
            <p>username</p>
            <SetStatus 
                status={status}
                updateStatus={updateStatus}
            />
        </div>
    )
}

function SetStatus({
    status,
    updateStatus
}:
{
    status: string,
    updateStatus: React.Dispatch<React.SetStateAction<string>>
}) {

    const [lockStatus, lockUnlock] = useState<boolean>(true)
    
    return (
    <form id="status-form">
        <textarea 
            placeholder="Set your status!"
            maxLength={128}
            cols={32}
            rows={4}
            disabled={lockStatus}
            value={status}
            onChange={e => updateStatus(e.target.value)}>
        </textarea>

        <input className = "changebutton" type="button" value={lockStatus ? "New Status" : "Submit"}
        onClick={() => lockUnlock(!lockStatus)}
        />
        <input type="button" value="Clear Status" 
        onClick={() => {updateStatus("")}} 
        />
    </form>
    );
}