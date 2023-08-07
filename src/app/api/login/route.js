import prisma from "@/app/lib/prisma";
import * as bcrypt from 'bcrypt'

export const POST = async (request) => {
    // try {
        const body = await request.json();
        const user = await prisma.user.findFirst({
            where: {
                email: body.email
            },
        });
        if(user && ( await bcrypt.compare(body.password, user.password))) {
            const { password, ...userWithoutPass } = user
            return new Response(JSON.stringify(userWithoutPass));
        } 
        // else return new Response(JSON.stringify(null));
        else return new Response(JSON.stringify({ message: "Invalid Credentials"}));
    // } catch (error) {
    //     // return new Response(JSON.stringify({ message: "Invalid Credentials", error }, {status: 500}));
    //     return NextResponse.json({ message: "Invalid Credentials", error}, {status: 500});
    // }
}