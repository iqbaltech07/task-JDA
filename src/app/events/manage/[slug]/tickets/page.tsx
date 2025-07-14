'use client';

import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import TicketList from '~/components/tickets/TicketList';
import { useParams } from 'next/navigation';

const ManageTicketsPage: React.FC = () => {
    const { slug } = useParams();

    return (
        <PageContainer withNavbar withContainer>
            <div className="p-6">
                <a href="/events/manage" className="text-blue-400 hover:underline mb-6 block">
                    &larr; Back to Events
                </a>
                <h1 className="text-3xl font-bold mb-6">Manage Tickets for Event</h1>
                {typeof slug === 'string' && <TicketList eventSlug={slug} />}
            </div>
        </PageContainer>
    );
};

export default ManageTicketsPage;