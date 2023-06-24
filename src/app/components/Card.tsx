import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white">
      {children}
    </div>
  );
};

export default Card;
