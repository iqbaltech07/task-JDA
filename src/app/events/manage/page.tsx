'use client';

import React from 'react';
import EventList from '~/components/events/EventsList';
import PageContainer from '~/components/layouts/PageContainer';

const ManageEventsPage: React.FC = () => {
  return (
    <PageContainer withNavbar withContainer>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Manage Events</h1>
        <p className="text-gray-400 mb-8">
          Di sini Anda dapat menambah, mengubah, menghapus, dan mengelola tiket untuk setiap event.
        </p>
        <EventList />
      </div>
    </PageContainer>
  );
};

export default ManageEventsPage;