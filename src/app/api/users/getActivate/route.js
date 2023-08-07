import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import { NextResponse } from "next/server" 

export const GET = async () => {
    try {
        const allUsers = await prisma.user.findMany({
            where: { "status": 1 }
        });
        return NextResponse.json({apiURL:process.env.APP_URL, message: allUsers}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Get Error", err}, {status: 500});
    }
}