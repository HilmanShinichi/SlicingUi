import React, { useState } from 'react';

const ToggleTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <p>Tab 1 Content</p>}
        {activeTab === 2 && <p>Tab 2 Content</p>}
        {activeTab === 3 && <p>Tab 3 Content</p>}
      </div>
    </div>
  );
};

export default ToggleTab;