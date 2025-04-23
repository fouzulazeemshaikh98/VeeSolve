"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Initialize with a default value during SSR
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)
      setMatches(media.matches)

      // Add event listener for changes
      const listener = () => setMatches(media.matches)
      media.addEventListener("change", listener)

      // Clean up
      return () => media.removeEventListener("change", listener)
    }

    return undefined
  }, [query])

  return matches
}
