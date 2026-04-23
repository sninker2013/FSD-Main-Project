import type { User } from "../../../../../shared/types/user";
import type { CreateUserDTO } from "../../../../../shared/types/createUser";

type UsersResponseJSON = { message: string; data: User[] };
type UserResponseJSON = { message: string; data: User };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const USER_ENDPOINT = "/users";

let usersData: User[] = [];

export async function getUsers(): Promise<User[]> {
    const userResponse: Response = await fetch(`${BASE_URL}${USER_ENDPOINT}`);

    if (!userResponse.ok) {
        throw new Error("Failed to fetch users");
    }

    const json: UsersResponseJSON = await userResponse.json();

    usersData = json.data;
    return json.data;
}

export const addUser = async (user: CreateUserDTO): Promise<User> => {
    const response = await fetch(`${BASE_URL}${USER_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to add user");
    }

    const json: UserResponseJSON = await response.json();

    const newUser: User = json.data;

    usersData = [...usersData, newUser];

    return newUser;
};