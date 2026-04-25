import 'dotenv/config';

import { PrismaClient } from "../src/generated/prisma/client";
import { userSeedData, gameSeedData, friendSeedData, reviewSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    
    await prisma.$transaction([
        prisma.review.deleteMany(),
        prisma.friend.deleteMany(),
        prisma.user.deleteMany(),
        prisma.game.deleteMany(),
    ]);

    // insert users to db
    const users = await prisma.user.createMany(
        {
            data: userSeedData,
            skipDuplicates: true
        }
    );

    // insert games to db
    const games = await prisma.game.createMany(
        {
            data: gameSeedData,
            skipDuplicates: true
        }
    );

    // insert friends to db
    const seen = new Set();

    const normalizedFriends = friendSeedData
        .map(f => {
            const [a, b] = [f.userId, f.friendId].sort();
            return `${a}-${b}`;
        })
        .filter(key => {
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        })
        .map(key => {
            const [userId, friendId] = key.split("-");
            return {
                userId,
                friendId,
                dateAdded: new Date(),
                isFavourite: false,
            };
        });

    const friends = await prisma.friend.createMany({
        data: normalizedFriends,
        skipDuplicates: true,
    });

    // insert reviews to db
    const reviews = await prisma.review.createMany(
        {
            data: reviewSeedData,
            skipDuplicates: true
        }
    );

    console.log(`
        Seed complete:
        - Users: ${users.count}
        - Games: ${games.count}
        - Friends: ${friends.count}
        - Reviews: ${reviews.count}
        `);
    }

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 