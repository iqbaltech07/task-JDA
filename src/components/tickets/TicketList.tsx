'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Ticket } from '@prisma/client';
import TicketForm from './TicketForm';

interface TicketListProps {
  eventSlug: string;
}

const TicketList: React.FC<TicketListProps> = ({ eventSlug }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const fetchTickets = useCallback(async () => {
    const response = await fetch(`/api/events/${eventSlug}/tickets`);
    const data = await response.json();
    setTickets(data);
  }, [eventSlug]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this ticket?')) {
      await fetch('/api/tickets', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchTickets(); 
    }
  };

  const handleEdit = (ticket: Ticket) => {
    setEditingTicket(ticket);
    setIsFormVisible(true);
  };

  const handleAddNew = () => {
    setEditingTicket(null);
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
    setEditingTicket(null);
    fetchTickets();
  };

  return (
    <div>
      <button
        onClick={handleAddNew}
        className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-green-700"
      >
        + Tambah Tiket Baru
      </button>

      {isFormVisible && (
        <TicketForm
          eventSlug={eventSlug}
          ticket={editingTicket}
          onClose={handleFormClose}
        />
      )}

      <div className="space-y-4 mt-6">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <div key={ticket.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-yellow-400">{ticket.type}</h3>
                <p>${ticket.price} - Qty: {ticket.quantity}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(ticket)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ticket.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Belum ada tiket untuk event ini.</p>
        )}
      </div>
    </div>
  );
};

export default TicketList;