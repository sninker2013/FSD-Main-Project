import 'dotenv/config';

import { PrismaClient } from "../src/generated/prisma/client";
import { userSeedData, gameSeedData, friendSeedData, reviewSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    
    await prisma.friend.deleteMany();

    await prisma.review.deleteMany();
    
    await prisma.user.deleteMany();

    await prisma.game.deleteMany();

    // insert users to db
    const createManyUsers = await prisma.user.createManyAndReturn(
        {
            data: userSeedData,
            skipDuplicates: true
        }
    );

    // insert games to db
    const createManyGames = await prisma.game.createManyAndReturn(
        {
            data: gameSeedData,
            skipDuplicates: true
        }
    );

    // insert friends to db
    const createManyFriends = await prisma.friend.createManyAndReturn(
        {
            data: friendSeedData,
            skipDuplicates: true
        }
    );

    // insert reviews to db
    const createManyReviews = await prisma.review.createManyAndReturn(
        {
            data: reviewSeedData,
            skipDuplicates: true
        }
    );

    console.log(`CREATED USERS: ${createManyUsers}, CREATED GAMES: ${createManyGames}, CREATED FRIENDS: ${createManyFriends}, CREATED REVIEWS: ${createManyReviews}`);
};

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 