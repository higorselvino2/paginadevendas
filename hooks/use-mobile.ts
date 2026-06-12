import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    
    // Set initial value inside a timeout or without it, actually just avoiding sync set state
    let animationFrameId = requestAnimationFrame(() => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    })
    
    return () => {
      cancelAnimationFrame(animationFrameId)
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
