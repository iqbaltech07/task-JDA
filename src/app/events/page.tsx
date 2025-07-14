'use client';

import React, { useState, useEffect } from 'react';
import EventCard from '~/components/EventCard';
import PageContainer from '~/components/layouts/PageContainer';
import { Event } from '~/data/events';

const EventsPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (loading) {
        return (
            <PageContainer withNavbar withContainer>
                <div className="text-center">Loading...</div>
            </PageContainer>
        );
    }

    return (
        <PageContainer withNavbar withContainer>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Events</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
                </div>
            </div>
        </PageContainer>
    );
};

export default EventsPage;