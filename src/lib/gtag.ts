/* eslint-disable @typescript-eslint/no-explicit-any */
export const trackEvent = (eventName: string, params?: Record<string, string>) => {
  const w = window as any;
  if (typeof w.gtag === 'function') {
    w.gtag('event', eventName, params);
  } else {
    // Queue events if gtag hasn't loaded yet
    w._gtagQueue = w._gtagQueue || [];
    w._gtagQueue.push({ eventName, params });
  }
};
