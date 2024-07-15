import prisma from "@/app/lib/prisna";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("take") ?? "0";
  if (isNaN(+take)) {
    return NextResponse.json(
      { message: "take debe ser un numero" },
      { status: 400 }
    );
  }

  if (isNaN(+skip)) {
    return NextResponse.json(
      { message: "skip debe ser un numero" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take: +take,
    skip: +skip,
  });
}


export async function POST(request: Request) { 
    const body = await request.json();
    const todo = await prisma.todo.create({
        data: body,
    })
return NextResponse.json(todo)
}
