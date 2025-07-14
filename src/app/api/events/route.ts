import { NextRequest, NextResponse } from 'next/server';
import { events, Event } from '~/data/events';
import { tickets } from '~/data/tickets';

export async function GET() {
  return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
  const newEventData: Omit<Event, 'id'> = await request.json();
  const newEvent: Event = {
    ...newEventData,
    id: Date.now(),
  };
  events.push(newEvent);
  return NextResponse.json(newEvent, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const updatedEvent: Event = await request.json();
  const index = events.findIndex((e) => e.id === updatedEvent.id);

  if (index !== -1) {
    events[index] = updatedEvent;
    return NextResponse.json(updatedEvent);
  } else {
    return NextResponse.json({ message: 'Event not found' }, { status: 404 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  const eventIndex = events.findIndex((e) => e.id === id);

  if (eventIndex !== -1) {
    const deletedEvent = events.splice(eventIndex, 1);
    
    const remainingTickets = tickets.filter(ticket => ticket.eventId !== id);
    tickets.length = 0;
    tickets.push(...remainingTickets);

    return NextResponse.json(deletedEvent[0]);
  } else {
    return NextResponse.json({ message: 'Event not found' }, { status: 404 });
  }
}