import React, { useState, useEffect } from 'react';

// import services
import ProfileService from '../../services/profile.service';

// import components
import AvailableChats from './AvailableChats';
import ChatMessages from './ChatMessages';
import ChatsSidebar from './ChatsSidebar';

export default function ChatsPage() {
  // component state
  const [profiles, setProfiles] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // fetchProfiles
    // subscribe to chats
    // unsubscribe
  }, []);

  async function fetchProfiles() {
    const profiles = await ProfileService.fetchProfiles();
    setProfiles(profiles);
  }

  return <div>ChatsPage</div>;
}
