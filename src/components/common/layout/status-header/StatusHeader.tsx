import { useState } from "react";
import "./StatusHeader.css"
import { Nav } from "../Nav/Nav";

export function StatusHeader({
    status,
    updateStatus
}:
{
    status: string,
    updateStatus: React.Dispatch<React.SetStateAction<string>>
}) {
    return (
        <header>
        <div className="headerBar">
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