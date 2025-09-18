import { Navigate, Outlet, useLocation } from 'react-router-dom'

const isAuthenticated = () => {
  try {
    const token = localStorage.getItem('authToken')
    return !!token
  } catch {
    return false
  }
}

const ProtectedRoute = () => {
  const location = useLocation()
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return <Outlet />
}

export default ProtectedRoute
