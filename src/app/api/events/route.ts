import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '~/libs/prisma';

export async function GET() {
  const events = await prisma.event.findMany();
  return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newEvent = await prisma.event.create({
    data: {
      ...data,
      slug: data.name.toLowerCase().replace(/\s+/g, '-'),
    },
  });
  return NextResponse.json(newEvent, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const data = await request.json();
  const { id, ...updateData } = data;
  const updatedEvent = await prisma.event.update({
    where: { id: Number(id) },
    data: updateData,
  });
  return NextResponse.json(updatedEvent);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  const deletedEvent = await prisma.event.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json(deletedEvent);
}