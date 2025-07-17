'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Event } from '@prisma/client';
import EventForm from './EventForm';

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus event ini? Semua tiket terkait juga akan terhapus.')) {
      await fetch('/api/events', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchEvents(); 
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setIsFormVisible(true);
  };

  const handleAddNew = () => {
    setEditingEvent(null);
    setIsFormVisible(true);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
    setEditingEvent(null);
    fetchEvents(); 
  };

  if (loading) {
      return <div className="text-center">Loading events...</div>
  }

  return (
    <div>
      <button
        onClick={handleAddNew}
        className="bg-green-600 text-white px-5 py-2 rounded-lg mb-6 hover:bg-green-700 transition-colors shadow-lg"
      >
        + Tambah Event Baru
      </button>

      {isFormVisible && <EventForm event={editingEvent} onClose={handleFormClose} />}

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-800 p-4 rounded-lg flex flex-wrap justify-between items-center gap-4">
            <h3 className="text-xl font-bold text-white">{event.name}</h3>
            <div className="flex items-center space-x-3">
              <Link href={`/events/manage/${event.slug}/tickets`} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors text-sm font-medium">
                Manage Tickets
              </Link>
              <button onClick={() => handleEdit(event)} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors text-sm font-medium">
                Edit
              </button>
              <button onClick={() => handleDelete(event.id)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;