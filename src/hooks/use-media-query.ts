import { useState, useEffect } from "react";

/**
 * Hook for responsive design with media queries
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    
    const updateMatch = () => {
      setMatches(media.matches);
    };

    // Set initial value
    updateMatch();

    // Listen for changes
    if (media.addEventListener) {
      media.addEventListener("change", updateMatch);
      return () => media.removeEventListener("change", updateMatch);
    } else {
      // Fallback for older browsers
      media.addListener(updateMatch);
      return () => media.removeListener(updateMatch);
    }
  }, [query]);

  return matches;
}