import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api, setToken } from '../services/api'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await api.post('/api/auth/login', { email, password })
      setToken(res.token)
      localStorage.setItem('user', JSON.stringify(res.user))
      navigate('/')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="min-h-[calc(100vh-7rem)] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Log in</h1>
          {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <button disabled={loading} type="submit" className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white py-3 rounded-lg font-semibold">
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">Don't have an account? <Link to="/register" className="text-orange-600 hover:underline">Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
