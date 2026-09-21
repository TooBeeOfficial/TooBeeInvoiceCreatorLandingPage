import { useEffect, useState } from 'react'

/** Counts up to `target` over `duration`ms once `start` turns true. */
export function useCountUp (target: number, start: boolean, duration = 700): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    let raf = 0
    const startTime = performance.now()
    const ease = (t: number) => 1 - (1 - t) * (1 - t)

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration)
      setValue(Math.round(target * ease(t)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return value
}
