import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function RouteScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1))
      const target = document.getElementById(targetId)

      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }

      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return null
}

export default RouteScrollHandler