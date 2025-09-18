// src/components/AuthGate.jsx
import { useEffect, useState } from 'react'

const isAuthed = () => {
  try { return !!localStorage.getItem('authToken') } catch { return false }
}

const AuthGate = ({ children }) => {
  const [authed, setAuthed] = useState(isAuthed())

  useEffect(() => {
    const update = () => setAuthed(isAuthed())
    // React to token changes across tabs
    window.addEventListener('storage', update)
    // React to in-app token changes
    window.addEventListener('authchange', update)
    return () => {
      window.removeEventListener('storage', update)
      window.removeEventListener('authchange', update)
    }
  }, [])

  if (!authed) return null
  return children
}

export default AuthGate