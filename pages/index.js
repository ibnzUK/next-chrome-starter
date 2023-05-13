import React, { useState } from 'react';
import Index from '../components/Index';
import New from '../components/New';

export default function Home() {
  const [activePage, setActivePage] = useState('index');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    if (activePage === 'index') {
      return <Index navigateToPage={navigateToPage} />;
    } else if (activePage === 'new') {
      return <New navigateToPage={navigateToPage} />;
    }

    // Handle other pages here if needed

    return null;
  };

  return <>{renderPage()}</>;
}
