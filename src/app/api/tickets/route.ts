import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/libs/prisma";

export async function PUT(request: NextRequest) {
  const data = await request.json();
  const { id, ...updateData } = data;
  const updatedTicket = await prisma.ticket.update({
    where: { id },
    data: updateData,
  });
  return NextResponse.json(updatedTicket);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  const deletedTicket = await prisma.ticket.delete({
    where: { id },
  });
  return NextResponse.json(deletedTicket);
}