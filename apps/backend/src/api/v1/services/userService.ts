import type { User } from "../../../generated/prisma/client";
import prisma from "../../../../prisma/client";
// initialize a prisma client if not already and use in queries here

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
 * @param userName - The user name of the user to be retrieved
 * @returns The User being retrieved
 * @throws If the id doesn't match an existing user
 */
export const getUserByUserName = async(userName: string): Promise<User | null> => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                userName: userName
            }
        });

        if(!user) {
            return null;
        } else{
            return user;
        }
    } catch(error) {
        throw new Error(`Failed to fetch user with user name ${userName}`);
    }
}

export const getUserById = async(id: string): Promise<User | null> => {
        const user: User | null = await prisma.user.findUnique(
        {
            where: {
                id: id
            }
        }
    );

    if (!user) {
        return null;
    } else {
        return user;
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
    dateCreated?: Date,
    profilePic: string
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

export const updateUserPfp = async(id: string, pfp: string): Promise<User> => {
    const updatedUser = await prisma.user.update({
        where: { id: id },
        data: { profilePic: pfp}
    })
    return updatedUser
}

export const updateUserStatus = async(id: string, status: string): Promise<User> => {
    const updatedUser = await prisma.user.update({
        where: { id: id },
        data: { status: status }
    })
    return updatedUser
}