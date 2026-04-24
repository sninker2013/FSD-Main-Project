import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import * as userRepo from "../../apis/users/userRepo";

export function useStatus() {
    const [status, updateStatus] = useState<string>("");
    const [lockStatus, lockUnlock] = useState<boolean>(true);
    const [clearButtonVisible, setClearButtonVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const { getToken, isSignedIn } = useAuth();

    // Load user status on component mount if user is signed in
    useEffect(() => {
        if (isSignedIn) {
            loadUserStatus();
        } else {
            setIsLoading(false);
        }
    }, [isSignedIn]);

    // Update clearButtonVisible when status or lockStatus changes
    useEffect(() => {
        setClearButtonVisible(status !== "" || !lockStatus);
    }, [status, lockStatus]);

    async function loadUserStatus() {
        try {
            setIsLoading(true);
            setError(null);
            const token = await getToken();
            
            if (!token) {
                setError("No session token available");
                setIsLoading(false);
                return;
            }

            const user = await userRepo.getCurrentUser(token);
            updateStatus(user.status || "");
            lockUnlock(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load user status");
            console.error("Error loading user status:", err);
        } finally {
            setIsLoading(false);
        }
    }

    async function submitStatus() {
        try {
            setError(null);
            const token = await getToken();
            
            if (!token) {
                setError("No session token available");
                return;
            }

            await userRepo.updateUserStatus(token, status);
            lockUnlock(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to update status");
            console.error("Error updating status:", err);
        }
    }

    async function clearStatus() {
        try {
            setError(null);
            const token = await getToken();
            
            if (!token) {
                setError("No session token available");
                return;
            }

            await userRepo.updateUserStatus(token, "");
            updateStatus("");
            lockUnlock(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to clear status");
            console.error("Error clearing status:", err);
        }
    }

    function buttonLogic() {
        if (!lockStatus) {
            // User is editing, submit the status
            submitStatus();
        } else if (status !== "") {
            // Status is locked and not empty, clear it
            clearStatus();
        } else {
            // Status is locked and empty, unlock for editing
            lockUnlock(false);
        }
    }

    return {
        status,
        updateStatus,
        lockStatus,
        lockUnlock,
        clearButtonVisible,
        buttonLogic,
        isLoading,
        error,
        isSignedIn,
        submitStatus
    };
}