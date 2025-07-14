'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PageContainer from '~/components/layouts/PageContainer';
import { Event } from '~/data/events';
import { Ticket } from '~/data/tickets';

const DetailEventPage: React.FC = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchDetails = async () => {
        try {
          const eventRes = await fetch('/api/events');
          const eventsData = await eventRes.json();
          const foundEvent = eventsData.find((e: Event) => e.slug === slug);
          setEvent(foundEvent || null);

          if (foundEvent) {
            const ticketRes = await fetch(`/api/events/${slug}/tickets`);
            const ticketsData = await ticketRes.json();
            setTickets(ticketsData);
          }
        } catch (error) {
          console.error('Failed to fetch details:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchDetails();
    }
  }, [slug]);

  if (loading) {
    return <PageContainer withNavbar withContainer><div className="text-center">Loading...</div></PageContainer>;
  }

  if (!event) {
    return <PageContainer withNavbar withContainer><div className="text-center text-red-500 font-semibold">Event not found.</div></PageContainer>;
  }

  return (
    <PageContainer withNavbar withContainer className="max-w-4xl mx-auto p-6">
      <button onClick={() => history.back()} className="mb-6 text-blue-600 hover:underline">
        ← Back
      </button>

      <div className="bg-white/10 shadow-md rounded-2xl overflow-hidden md:flex mb-8">
        <img src={event.image} alt={event.name} className="w-full md:w-1/2 h-64 object-cover" />
        <div className="p-6 flex-1">
          <h1 className="text-3xl font-bold mb-2">{event.name}</h1>
          <p className="text-white mb-4">{event.description}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Available Tickets</h2>
      <div className="space-y-4">
        {tickets.length > 0 ? (
          tickets.map(ticket => (
            <div key={ticket.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-yellow-400">{ticket.type}</h3>
                <p className="text-lg">${ticket.price}</p>
                <p className="text-sm text-gray-400">Qty: {ticket.quantity}</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Buy
              </button>
            </div>
          ))
        ) : (
          <p>No tickets available for this event.</p>
        )}
      </div>
    </PageContainer>
  );
};

export default DetailEventPage;