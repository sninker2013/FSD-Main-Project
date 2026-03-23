// Use the term type defined in prisma/schema.prisma
import { User } from "@prisma/client";
// initialize a prisma client if not already and use in queries here
import prisma from "../../../../prisma/client";

const users: User[] = userData;

/**
 * Retrieves all users from storage
 * @returns Array of all users
 */
export const getAllUsers = async(): Promise<User[]> => {
    // get all records in the term table
    return prisma.user.findMany();
}

/**
 * Retrieves one user from services
 * @param id - The ID of the user to be retrieved
 * @returns The User being retrieved
 * @throws If the id doesn't match a user listed
 */


export const getUserById = async(id: string): Promise<User | null> => {
    try {
        const user = prisma.user.findUnique({
            where: {
                id: id
            }
        });

        if(!user) {
            return null;
        } else{
            return user;
        }
    } catch(error) {
        throw new Error(`Failed to fetch user with id ${id}`);
    }
}

/**
 * Creates a new user
 * @param userData - The data for the new user (userId, userName and dateCreated)
 * @returns The created user with generated ID
 */
export const createUser = async(userData: {
    id: string,
    userName: string,
    dateCreated: Datetime
}): Promise<User> => {

    const newUser: User = await prisma.user.create({
        data: {
            ...userData
        }
    });

    return newUser;
}


export const deleteUser = async(id: string): Promise<void> => {
    await prisma.user.delete({
        where: {
            id: id
        }
    });
}