// 메인 컴포넌트
import React from 'react';
import Navbar from '@/site/Navbar.jsx';
import SubscribeSection from '@/site/SubscribeSection.jsx';
import DifficultiesSection from '@/site/DifficultiesSection';
import SubscriptionInfoSection from '@/site/SubscriptionInfoSection';
import FinalSubscribeSection from '@/site/FinalSubscribeSection';
import Footer from '@/site/Footer';

function App() {
  return (
    <>
      <Navbar />
      <SubscribeSection />
      <DifficultiesSection />
      <SubscriptionInfoSection />
      <FinalSubscribeSection />
      <Footer />
    </>
  );
}

export default App;
