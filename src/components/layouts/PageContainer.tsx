"use client"

import React, { forwardRef, ReactNode } from "react";
import Navbar from "../common/navbar";

interface PageContainerProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
  withNavbar?: boolean;
  withContainer?: boolean;
}

const PageContainer = forwardRef<HTMLElement, PageContainerProps>(
  ({ className, children, withNavbar = false, withContainer, ...props }, ref) => {
    return (
      <div {...props}>
        {withNavbar && <Navbar />}
        <main ref={ref} className={`${withContainer && "container"} mx-auto ${className}`}>
          {children}
        </main>
      </div>
    );
  }
);

PageContainer.displayName = "PageContainer";

export default PageContainer;
