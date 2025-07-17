import React from 'react';
import Link from 'next/link';
import { Event } from '@prisma/client';

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <div className="bg-white/20 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <img
                src={event?.image}
                alt={event?.name}
                className="w-full h-52 object-cover"
            />
            <div className="p-5 flex flex-col h-[200px]">
                <h2 className="text-2xl font-semibold text-white mb-2">{event?.name}</h2>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{event?.description}</p>
                <div className="mt-auto flex items-center justify-between">
                    <Link
                        href={`/detail/event/${event?.slug}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                    >
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;