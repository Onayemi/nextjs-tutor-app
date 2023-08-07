import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import { NextResponse } from "next/server"


export const GET = async (request, {params}) => {
    try {
        const { id } = params;
        const getAllHouseWithOwner = await prisma.house.findUnique({
            where: { id },
            include: {
                owner: true,
                builtBy: false,
            }
        });
        if(!getAllHouseWithOwner) {
            return NextResponse.json({ message: "User not found", err }, {status: 404});
        }
        return NextResponse.json(getAllHouseWithOwner);
    } catch (error) {
        return NextResponse.json({ message: "Get Error", err}, {status: 500});
    }
}