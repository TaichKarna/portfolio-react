import React, { type ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  className = '',
}) => (
  <div
    className={`max-w-4xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className} fade-in`}
    role="main"
  >
    {children}
  </div>
);

export default MainContainer;
