import { NextRequest, NextResponse } from "next/server";
import { tickets, Ticket } from "~/data/tickets";

export async function PUT(request: NextRequest) {
  const updatedTicket: Ticket = await request.json();
  const index = tickets.findIndex((t) => t.id === updatedTicket.id);

  if (index !== -1) {
    tickets[index] = { ...tickets[index], ...updatedTicket };
    return NextResponse.json(tickets[index]);
  } else {
    return NextResponse.json({ message: "Ticket not found" }, { status: 404 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  const index = tickets.findIndex((t) => t.id === id);

  if (index !== -1) {
    const deletedTicket = tickets.splice(index, 1);
    return NextResponse.json(deletedTicket[0]);
  } else {
    return NextResponse.json({ message: "Ticket not found" }, { status: 404 });
  }
}
