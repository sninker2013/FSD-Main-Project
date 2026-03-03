import "./StatusHeader.css"
import { Nav } from "../../Nav/Nav";
import { useStatus } from "../../../../hooks/useStatus";

export function StatusHeader() {

    return (
        <header>
        <div className="headerBar">
        <h1>GameStars</h1>
        < Status />
        </div>
        <Nav />
        </header>
    );
}

export function Status() {
    return(
        <div className="status">
            <img src={"/images/profilePics/silksong.png"} alt="reviewer profile picture" style={{width: "56px", height: "56px"}}/>
            <p>username</p>
            <SetStatus />
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