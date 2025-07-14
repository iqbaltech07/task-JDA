import React from "react";
import Cards from "~/components/EventCard";
import PageContainer from "~/components/layouts/PageContainer";

export default function Home() {
  return (
    <PageContainer withNavbar withContainer className="flex flex-col items-center">
      <h2>Welcome To MyTicketX</h2>
    </PageContainer>
  );
}
