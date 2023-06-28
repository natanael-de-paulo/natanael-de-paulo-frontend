export function ConfigRequest(config?: any) {
  const token = localStorage.getItem('token')
  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    ...config
  }

  return authHeader
}

