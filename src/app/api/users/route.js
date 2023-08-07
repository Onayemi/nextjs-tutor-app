import prisma from "@/app/lib/prisma";
// import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt'
import { NextResponse } from "next/server"

// export async function GET() {
//     const allUsers = await prisma.user.findMany();
//     return NextResponse.json({apiURL:process.env.APP_URL, message: allUsers}, {status: 200})
// }

export const GET = async () => {
    try {
        const allUsers = await prisma.user.findMany();
        return NextResponse.json({apiURL:process.env.APP_URL, message: allUsers}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Get Error", err}, {status: 500});
    }
}


export const POST = async (request) => {
    try {
        const body = await request.json();
        // const { firstName, lastName, age, status } = body;
        const newUser = await prisma.user.create({ 
            data: { 
                firstName: body.firstName, 
                lastName: body.lastName, 
                email: body.email, 
                age:body.age, 
                password: await bcrypt.hash(body.password, 10),  // 10 salt 
                status: body.status,
            } 
        });
        const { password, ...result } = newUser;
        return new Response(JSON.stringify(result));
        //return NextResponse.json({result}, {status: 200})
    } catch (error) {
        return NextResponse.json({ message: "Get Error", error}, {status: 500});
    }
}

// export async function POST(request) {

// }