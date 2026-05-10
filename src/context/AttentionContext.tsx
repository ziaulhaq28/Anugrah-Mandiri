import React, { createContext, useContext, useState, useCallback } from 'react';

interface AttentionContextType {
  isPulsing: boolean;
  triggerAttention: () => void;
}

const AttentionContext = createContext<AttentionContextType | undefined>(undefined);

export function AttentionProvider({ children }: { children: React.ReactNode }) {
  const [isPulsing, setIsPulsing] = useState(false);

  const triggerAttention = useCallback(() => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger pulse/shake effect
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 3000); // Effect durations for 3 seconds
  }, []);

  return (
    <AttentionContext.Provider value={{ isPulsing, triggerAttention }}>
      {children}
    </AttentionContext.Provider>
  );
}

export function useAttention() {
  const context = useContext(AttentionContext);
  if (context === undefined) {
    throw new Error('useAttention must be used within an AttentionProvider');
  }
  return context;
}
