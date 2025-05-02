'use client';
import { useState } from 'react';
import NewOrdersTab from './tabs/NewOrdersTab'
import PrimaryButton from '../PrimaryButton';
export default function Tabs() {
  const [activeTab, setActiveTab] = useState('new');

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {['new', 'active', 'scheduled'].map(tab => (
          <PrimaryButton
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-0  ${
              activeTab === tab ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Orders
          </PrimaryButton>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        {activeTab === 'new' && <NewOrdersTab />}
        {activeTab === 'active' && <div>Active Orders Section</div>}
        {activeTab === 'scheduled' && <div>Scheduled Orders Section</div>}
      </div>
    </div>
  );
}
