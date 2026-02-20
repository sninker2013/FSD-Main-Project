import { useEffect, useState } from "react";

export function useStatus () {
    const [status, updateStatus] = useState<string>("");
    const [lockStatus, lockUnlock] = useState<boolean>(true)
    const [clearButtonVisible, setClearButtonVisible] = useState<boolean>(false)

    useEffect(() => {
        setClearButtonVisible(status !== "" || !lockStatus);
    }, [status, lockStatus])

    function buttonLogic() {
        if (lockStatus && status !== "") {
            updateStatus("")
        } else {
            lockUnlock(!lockStatus)
        }
    }

    
    return {
        status, updateStatus,
        lockStatus, lockUnlock,
        clearButtonVisible,
        buttonLogic
    }
}