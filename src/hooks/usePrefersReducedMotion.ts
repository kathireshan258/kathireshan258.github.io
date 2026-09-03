import { useSyncExternalStore } from 'react'

const motionQuery = '(prefers-reduced-motion: reduce)'

function getPrefersReducedMotion() {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return false
  }

  return window.matchMedia(motionQuery).matches
}

function subscribeToMotionPreference(onStoreChange: () => void) {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return () => undefined
  }

  const mediaQuery = window.matchMedia(motionQuery)
  mediaQuery.addEventListener('change', onStoreChange)
  return () => mediaQuery.removeEventListener('change', onStoreChange)
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    getPrefersReducedMotion,
    () => false,
  )
}
