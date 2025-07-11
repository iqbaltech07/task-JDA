import React from "react";
import Cards from "~/components/Cards";
import PageContainer from "~/components/layouts/PageContainer";

export default function Home() {
  return (
    <PageContainer withNavbar withContainer>
      <Cards />
    </PageContainer>
  );
}
