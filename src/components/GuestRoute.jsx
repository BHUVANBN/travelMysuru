import { Navigate, Outlet } from 'react-router-dom'

const isAuthenticated = () => {
  try {
    const token = localStorage.getItem('authToken')
    return !!token
  } catch {
    return false
  }
}

const GuestRoute = () => {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}

export default GuestRoute
