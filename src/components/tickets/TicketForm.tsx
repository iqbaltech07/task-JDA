'use client';

import React, { useState, useEffect } from 'react';
import { Ticket } from '@prisma/client';

interface TicketFormProps {
  eventSlug: string;
  ticket: Ticket | null;
  onClose: () => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ eventSlug, ticket, onClose }) => {
  const [formData, setFormData] = useState({
    type: 'Regular' as 'VIP' | 'Regular',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    if (ticket) {
      setFormData({
        type: ticket.type as 'VIP' | 'Regular',
        price: ticket.price.toString(),
        quantity: ticket.quantity.toString(),
      });
    }
  }, [ticket]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submissionData = {
        type: formData.type,
        price: parseFloat(formData.price) || 0,
        quantity: parseInt(formData.quantity, 10) || 0,
    };

    if (ticket) {
      await fetch('/api/tickets', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...submissionData, id: ticket.id }),
      });
    } else {
      await fetch(`/api/events/${eventSlug}/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white">{ticket ? 'Edit Ticket' : 'Add New Ticket'}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">Ticket Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Regular">Regular</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">Price</label>
            <input
              id="price"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 150000"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
            <input
              id="quantity"
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 100"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {ticket ? 'Update Ticket' : 'Save Ticket'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;