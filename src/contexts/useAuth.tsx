/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import jwtDecode from 'jwt-decode'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { LoginUserProps } from '../services/types'

interface AuthContextData {
  singIn: ({ email, password }: LoginUserProps) => Promise<void>
  signOut: () => void
  isAuthenticated: boolean
  loading: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

type Token = {
  sub: string
  userId: string
}

type DecodeTokenProps = {
  userId: string
  userEmail: string
  token: string
}

const AuthContext = createContext({} as AuthContextData)
export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [, setToken] = useState({} || null)
  const navigate = useNavigate()

  useEffect(() => {
    const recoveredToken = localStorage.getItem('token')

    if (recoveredToken) {
      setToken(recoveredToken)
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const singIn = async ({ email, password }: LoginUserProps) => {
    try {
      const { data } = await api.post('/auth', {
        email,
        password
      })

      const decodedToken = jwtDecode(data.token) as Token

      const userData = {
        userId: decodedToken.userId,
        userEmail: decodedToken.sub,
        token: data.token
      } as DecodeTokenProps

      localStorage.setItem('user_id', userData.userId)
      localStorage.setItem('token', userData.token)

      setIsAuthenticated(true)
      setToken(userData.token)
      navigate('/home')
    } catch (error) {
      console.error(error)
      alert('Ocorreu um error ao logar.')
    }
  }

  const signOut = () => {
    localStorage.clear()
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ singIn, signOut, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useContextAuth() {
  return useContext(AuthContext)
}
