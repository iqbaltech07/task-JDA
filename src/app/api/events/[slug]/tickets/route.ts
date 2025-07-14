import { NextRequest, NextResponse } from "next/server";
import { tickets, Ticket } from "~/data/tickets";
import { events } from "~/data/events";

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  const eventTickets = tickets.filter((t) => t.eventId === event.id);
  return NextResponse.json(eventTickets);
}

export async function POST(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  const newTicketData: Omit<Ticket, "id" | "eventId"> = await request.json();
  const newTicket: Ticket = {
    id: `t${Date.now().toString()}`,
    eventId: event.id,
    ...newTicketData,
  };

  tickets.push(newTicket);
  return NextResponse.json(newTicket, { status: 201 });
}

