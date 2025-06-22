import React from 'react';
import AgentCard from '@/app/components/AgentCard'; 
const AgentPage = () => {
  return (
    <>
      <h3>Interview Generation</h3>
      <AgentCard userName="You" userId="user1" type="generate" />
    </>
  );
};

export default AgentPage;
