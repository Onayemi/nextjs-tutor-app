import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({message: "Product Created Successfully"}, {status: 200})
}

export async function POST(request) {
    
    return NextResponse.json({message: "Testing Created Successfully"}, {status: 200})
}