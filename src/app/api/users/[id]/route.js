import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    try {
        const { id } = params;
        const allUsers = await prisma.user.findUnique({
            where: { id }
        });
        if(!allUsers) {
            return NextResponse.json({ message: "User not found", err }, {status: 404});
        }
        return NextResponse.json(allUsers);
    } catch (error) {
        return NextResponse.json({ message: "Get Error", err}, {status: 500});
    }
}

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        // const { firstName, lastName, age, status } = body;

        const { id } = params;
        const updateUser = await prisma.user.update({ 
            where: { id }, // where: { id: parseInt(id) },
            data: body // { firstName, lastName, age, status } 
        });

        if(!updateUser) {
            return NextResponse.json({ message: "User not found", err }, {status: 404});
        }

        return NextResponse.json({updateUser}, {status: 200});

    } catch (error) {
        return NextResponse.json({ message: "Update Error", err}, {status: 500});
    }
}


export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await prisma.user.delete({
            where: { id }
        });
        return NextResponse.json("Post has been deleted!");

    } catch (error) {
        return NextResponse.json({ message: "Delete Error", err}, {status: 500});
    }
}