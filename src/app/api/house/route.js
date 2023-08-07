import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import { NextResponse } from "next/server"


export const GET = async () => {
    try {
        const getAllHousesDet = await prisma.house.findMany({
            include: {
                owner: true,
                builtBy: false,
            }
        });
    
        return NextResponse.json({apiURL:process.env.APP_URL, message: getAllHousesDet}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Get Error", err}, {status: 500});
    }
}

export const getAllDetail = async () => {
    try {
        const filterHouse = await prisma.house.findMany({
            where: { 
                wifiPassword : { not:null},
                owner: { age : { gte: 22, }},
                orderBy: [
                    { owner : { firstName: "desc" }}
                ]
            },
            include: {
                owner: true,
                builtBy: false,
            }
        });
        return NextResponse.json({apiURL:process.env.APP_URL, message: filterHouse }, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Get Error", err}, {status: 500});
    }
}

export const POST = async (request) => {
    try {
        const body = await request.json();
        // const { address, wifiPassword, location, ownerId, builtById } = body;
        const newHouse = await prisma.house.create({ 
            data: body //{ address, wifiPassword, location, ownerId, builtById } 
        });
        if(!newHouse) {
            return NextResponse.json({ message: "User not found", err }, {status: 404});
        }
        return NextResponse.json({newHouse}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Get Error", err}, {status: 500});
    }
}

// // http://localhost:3000/api/house/many
// const body = await request.json();
//         const { address, wifiPassword, location, ownerId, builtById } = body;
// const newHouse = await prisma.house.createMany({ 
//     data: { address, wifiPassword, location, ownerId, builtById } 
// });
