const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

export interface UserData {
    id: string;
    userName: string;
    profilePic: string;
    status: string;
    dateCreated: string;
}

/**
 * Fetches the current authenticated user's data
 * @param sessionToken - The Clerk session token for authentication
 * @returns The current user data
 */
export async function getCurrentUser(sessionToken: string): Promise<UserData> {
    const response = await fetch(`${API_BASE_URL}/users/current`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch current user");
    }

    const data = await response.json();
    return data.data;
}

/**
 * Updates the current authenticated user's status
 * @param sessionToken - The Clerk session token for authentication
 * @param status - The new status message
 * @returns The updated user data
 */
export async function updateUserStatus(sessionToken: string, status: string): Promise<UserData> {
    const response = await fetch(`${API_BASE_URL}/users/current/status`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`
        },
        body: JSON.stringify({ status })
    });

    if (!response.ok) {
        throw new Error("Failed to update user status");
    }

    const data = await response.json();
    return data.data;
}
