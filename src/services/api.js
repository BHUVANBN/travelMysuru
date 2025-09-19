// src/services/api.js
const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://travelmysuru.onrender.com'
export const BASE_URL = rawBaseUrl.replace(/\/+$/, '')
let authToken = null

export const setToken = (token) => {
  authToken = token
  if (token) localStorage.setItem('authToken', token)
  else localStorage.removeItem('authToken')
  // notify app about auth state changes
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('authchange'))
  }
}
export const getToken = () => {
  if (authToken) return authToken
  const stored = localStorage.getItem('authToken')
  authToken = stored
  return authToken
}

export const logout = () => {
  try {
    setToken(null)
    localStorage.removeItem('user')
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('authchange'))
    }
  } finally {
    if (typeof window !== 'undefined') window.location.href = '/'
  }
}

const buildHeaders = (isJSON = true) => {
  const headers = {}
  if (isJSON) headers['Content-Type'] = 'application/json'
  const token = getToken()
  if (token) headers['Authorization'] = `Bearer ${token}`
  return headers
}

const handle = async (res) => {
  const contentType = res.headers.get('content-type') || ''
  const data = contentType.includes('application/json') ? await res.json() : await res.text()
  if (!res.ok) {
    if (res.status === 401) {
      logout()
      throw new Error('Unauthorized')
    }
    throw new Error(data?.message || 'Request failed')
  }
  return data
}

export const api = {
  get: async (path) => {
    const res = await fetch(`${BASE_URL}${path}`, { headers: buildHeaders(false) })
    return handle(res)
  },
  post: async (path, body) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: buildHeaders(true),
      body: JSON.stringify(body),
    })
    return handle(res)
  },
  upload: async (path, formData) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: buildHeaders(false),
      body: formData,
    })
    return handle(res)
  },
}