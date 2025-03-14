"use client";
// hooks/useTabState.js
import { useState } from 'react';

export default function useTabState(initialTab = 'login') {
    const [activeTab, setActiveTab] = useState(initialTab);
    // const [activeTab, setActiveTab] = useTabState('login'); 

    // Hàm để thay đổi tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return {
        activeTab,
        handleTabClick,
    };
}
