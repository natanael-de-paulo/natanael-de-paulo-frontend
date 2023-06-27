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
// import { AuthHeader } from '../services/AuthHeader'
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
  _id: string
  user: string
  profile: string
}

type DecodeTokenProps = {
  user_id: string
  user_email: string
  profile_id: string
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
      const { data } = await api.post('/security/login', {
        user: email,
        password
      })

      const decodedToken = jwtDecode(data.accessToken) as Token

      const userData = {
        user_id: decodedToken._id,
        user_email: decodedToken.user,
        profile_id: decodedToken.profile,
        token: data.accessToken
      } as DecodeTokenProps

      localStorage.setItem('profile_id', userData.profile_id)
      localStorage.setItem('user_id', userData.user_id)
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
