import { useState, useEffect, useRef } from "react";

// Custom hook to detect page load type
export const usePageLoader = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const hasNavigated = useRef(false);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    // Get navigation type with proper fallback
    let navigationType: string;
    if (navigationEntry?.type) {
      navigationType = navigationEntry.type;
    } else {
      // Fallback: determine navigation type based on available information
      // Check if there's a referrer and if it's from the same origin
      const hasReferrer = document.referrer && document.referrer !== "";
      const isSameOrigin =
        hasReferrer &&
        new URL(document.referrer).origin === window.location.origin;

      // If no referrer or different origin, it's likely a direct navigation
      // If same origin referrer, it could be a reload or navigation
      navigationType = hasReferrer && isSameOrigin ? "reload" : "navigate";
    }

    // Check if page was refreshed or directly accessed
    const isDirectAccess =
      navigationType === "navigate" || navigationType === "reload";

    // // Also check if we have any previous navigation history
    const hasHistory = window.history.length > 1;

    // Determine if this is truly a first load (direct URL access)
    const firstLoad = isDirectAccess && !hasNavigated.current && !hasHistory;

    setIsFirstLoad(firstLoad);

    // Set loading duration based on load type
    const loadingDuration = firstLoad ? 3000 : 1000;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    // Mark that we've had at least one navigation
    hasNavigated.current = true;

    return () => clearTimeout(timer);
  }, []);

  // Function to trigger in-app navigation loading
//   const triggerInAppNavigation = () => {
//     setIsFirstLoad(false);
//     setIsLoading(true);

//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   };

  return {
    isFirstLoad,
    isLoading,
    // triggerInAppNavigation,
  };
};

export default usePageLoader