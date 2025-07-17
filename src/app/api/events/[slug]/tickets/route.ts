import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/libs/prisma";

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = await context.params;

  const event = await prisma.event.findUnique({
    where: { slug },
  });

  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  const eventTickets = await prisma.ticket.findMany({
    where: { eventId: event.id },
  });

  return NextResponse.json(eventTickets);
}

export async function POST(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = await context.params;

  const event = await prisma.event.findUnique({
    where: { slug },
  });

  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  const newTicketData = await request.json();

  const newTicket = await prisma.ticket.create({
    data: {
      ...newTicketData,
      eventId: event.id,
    },
  });

  return NextResponse.json(newTicket, { status: 201 });
}
