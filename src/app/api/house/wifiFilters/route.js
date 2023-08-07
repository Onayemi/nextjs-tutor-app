import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import { NextResponse } from "next/server"

// http://localhost:3000/api/house/wifiFilter
export const GET = async () => {
    try {
        const filterHouse = await prisma.house.findMany({
            where: { 
                wifiPassword : { not:null},
                owner: { age : { gte: 23, }},
            },
            orderBy: [
                { owner : { firstName: "asc" }}
            ],
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