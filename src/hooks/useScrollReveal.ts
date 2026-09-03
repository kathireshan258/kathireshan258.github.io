import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const canUseIntersectionObserver = typeof IntersectionObserver !== 'undefined'
  const [hasIntersected, setHasIntersected] = useState(false)
  const isVisible =
    hasIntersected || prefersReducedMotion || !canUseIntersectionObserver

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    if (isVisible || !canUseIntersectionObserver) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -14% 0px', threshold: 0.12 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [canUseIntersectionObserver, isVisible])

  return { ref, isVisible }
}
